import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { mainApi } from '../../utils/MainApi';
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

function filterMovies(movies, name, checkbox) {
  if (!movies) {
    return [];
  }
  console.log(name, checkbox)
  let filteredMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(name.toLowerCase()))
  if (checkbox) {
      filteredMovies = filteredMovies.filter((item) => (item.duration <= 40))
  }
  return filteredMovies;
}

function App() {
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

    function handleChangeCheckbox(checkbox) {
      localStorage.setItem('checkbox', checkbox)
      setCheckbox(checkbox);
    }

  function handleSearchMovie(name, checkbox) {
        setPreloader(true);
        moviesApi.getMovies()
        .then((allMovies) => {
            setPreloader(false);
            setMovies(allMovies);
            localStorage.setItem('lastSearch', JSON.stringify(allMovies));
            localStorage.setItem('name', name);
            localStorage.setItem('checkbox', checkbox);
            sethasLoaded(true);
        }).catch((err) => {
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
  }, [loggedIn]);

  useEffect(function () {
    tokenCheck();
  }, []);

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
        navigate("/");
      }).catch((err) => { console.log(err) });
    }
  }

  function handleLogin() {
    setLoggedIn(true)
  }
  function handleUserData(data) {
    setUserData(data);
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
  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserData(null);
  }

  useEffect(function () {
    if (loggedIn) {
      mainApi.getSavedMovies().then((savedMovies) => {
        setSavedMovies(savedMovies);
        setLikedMoviesIds(savedMovies.map((item) => item.movieId));
      }).catch((err) => { console.log(err) });
    }
    
    setMovies(JSON.parse(localStorage.getItem('lastSearch')))
    setName(localStorage.getItem('name'))
    setCheckbox(JSON.parse(localStorage.getItem('checkbox')))
    
  }, [loggedIn]);

  function handleAddSavedMovie(movie) {
    mainApi.addSavedMovie(movie).then((newSavedMovie) => {
      setSavedMovies([newSavedMovie, ...savedMovies]);
    }).catch((err) => { console.log(err) });
  };

  function handleDeleteSavedMovie(savedMovie) {
    mainApi.deleteSavedMovie(savedMovie._id).then(() => {
      setSavedMovies((state) => state.filter((item) => item._id !== savedMovie._id));
    }).catch((err) => { console.log(err) });
  }

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
              handleSearchMovie={handleSearchMovie} 
              movies={filterMovies(movies, name, checkbox)} 
              preloader={preloader} 
              hasLoaded={hasLoaded} 
              errMsg={errMsg} 
              setErrMsg={setErrMsg}
              filterMovies={filterMovies}
              name={name}
              setName={setName}
              checkbox={checkbox}
              setCheckbox={handleChangeCheckbox}/>
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
              savedMovies={savedMovies}
              onDelete={handleDeleteSavedMovie}
              setName={setName}
              setCheckbox={handleChangeCheckbox}
              name={name}
              checkbox={checkbox}
              filterMovies={filterMovies}/>
            </ProtectedRoute>
          }/>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateUser={handleUpdateUser} handleSignOut={handleSignOut} profileErrMsg={profileErrMsg} setProfileErrMsg={setProfileErrMsg} success={success} />
            </ProtectedRoute>
          }/>
          
          <Route path="/signin" element={<Login  handleLogin={handleLogin} setData={handleUserData} />}/>
          <Route path="/signup" element={<Register />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
