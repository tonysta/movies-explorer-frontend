import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { mainApi } from '../../utils/MainApi';
import { register, login } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute";
import { checkToken } from "../../utils/Auth";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';

function App() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const [preloader, setPreloader] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [hasLoaded, sethasLoaded] = useState(false);

  const [name, setName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [profileErrMsg, setProfileErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [likedMoviesIds, setLikedMoviesIds] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  const handleChangeCheckbox = (event) => {
    localStorage.setItem('checkbox', event.target.checked)
    setCheckbox(event.target.checked);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleSearchMovieSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('checkbox', checkbox);
    setPreloader(true);
    moviesApi.getMovies()
    .then((allMovies) => {
        setPreloader(false);
        setMovies(allMovies);
        localStorage.setItem('lastSearch', JSON.stringify(allMovies));
        sethasLoaded(true);
    })
    .catch((err) => {
        setPreloader(false);
        localStorage.removeItem('lastSearch');
        localStorage.removeItem('name');
        localStorage.removeItem('checkbox');
        setErrMsg(true);
        console.log(err);
    })
  }

  useEffect(function () {
    if (loggedIn) {
      mainApi.getProfileInfo().then((userInfo) => {
        setCurrentUser(userInfo);
      }).catch((err) => { console.log(err) });
    }
    if (JSON.parse(localStorage.getItem('lastSearch'))) {
      setMovies(JSON.parse(localStorage.getItem('lastSearch')));
      setCheckbox(JSON.parse(localStorage.getItem('checkbox')));
      setName(localStorage.getItem('name'));
    }
  }, [loggedIn]);

  useEffect(function () {
    tokenCheck();
  }, []);

  useEffect(function () {
    setLikedMoviesIds(savedMovies.map((item) => item.movieId));
  }, [savedMovies]);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token).then((res) => {
        const userData = {
          email: res.email,
          name: res.name
        };
        setUserData(userData);
        setLoggedIn(true);
        navigate(location.pathname);
      }).catch((err) => { 
        handleSignOut();
        console.log(err) });
    }
  }

  function handleUpdateUser(data) {
    mainApi.patchProfile(data).then((res) => {
      setCurrentUser(res);
      setSuccess(true);
    })
      .catch((err) => {
        if (err === 409) {
          setProfileErrMsg('Пользователь с таким email уже существует.')
        } else {
          setProfileErrMsg('При обновлении профиля произошла ошибка.')
        }
        console.log(err);
    });
  }

  const onRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        if (data) {
          onLogin(email, password);
        }
      })
      .catch((err) => {
        if (err === 409) {
            setErrMsg('Пользователь с таким email уже существует.')
        } else {
            setErrMsg('При регистрации пользователя произошла ошибка.')
        }
        console.log(err);
    })
  };

  const onLogin = (email, password) => {
    login(email, password)
      .then((data) => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            setUserData({email});
            setLoggedIn(true)
            navigate("/movies");
        } else {
            console.log(data.message);
        }
      })
      .catch((err) => {
        if (err === 401) {
            setErrMsg('Вы ввели неправильный логин или пароль.')
        } else {
            setErrMsg('При авторизации произошла ошибка.')
        }
      console.log(err);
  });
  };

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    setUserData(null);
    setMovies([]);
    setSavedMovies([]);
    setCheckbox(false);
    setLikedMoviesIds([]);
    setName('');
    setCurrentUser({});
    setErrMsg(false);
    sethasLoaded(false);
  }

  useEffect(function () {
    if (loggedIn) {
      mainApi.getSavedMovies().then((savedMovies) => {
        setSavedMovies(savedMovies);
        setLikedMoviesIds(savedMovies.map((item) => item.movieId));
      }).catch((err) => { console.log(err) });
    }
  }, [loggedIn]);

  function handleAddSavedMovie(movie) {
    mainApi.addSavedMovie(movie)
    .then((newSavedMovie) => {
      setSavedMovies([newSavedMovie, ...savedMovies]);
      setLikedMoviesIds([newSavedMovie.movieId, ...likedMoviesIds]);
    })
    .catch((err) => { console.log(err) });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId || movie.id)

    mainApi
      .deleteSavedMovie(savedMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(
          (item) => item._id !== savedMovie._id
        ))
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies 
              onLike={handleAddSavedMovie} 
              likedMoviesIds={likedMoviesIds} 
              submitSearch={handleSearchMovieSubmit} 
              movies={filterMovies(movies, name, checkbox)} 
              preloader={preloader} 
              hasLoaded={hasLoaded} 
              errMsg={errMsg} 
              setErrMsg={setErrMsg}
              filterMovies={filterMovies}
              name={name}
              changeName={handleChangeName}
              checkbox={checkbox}
              changeCheckbox={handleChangeCheckbox}
              onDelete={handleDeleteMovie}
              />
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
              savedMovies={savedMovies}
              onDelete={handleDeleteMovie}
              />
            </ProtectedRoute>
          }/>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateUser={handleUpdateUser} handleSignOut={handleSignOut} profileErrMsg={profileErrMsg} setProfileErrMsg={setProfileErrMsg} success={success} />
            </ProtectedRoute>
          }/>
          
          <Route path="/signin" element={<Login onLogin={onLogin} errMsg={errMsg}/>}/>
          <Route path="/signup" element={<Register onRegister={onRegister} errMsg={errMsg}/>}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
