import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { moviesApi } from '../../utils/MoviesApi';
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();


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
    }).catch((err) => { console.log(err) });
  }
  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserData(null);
  }

  // function handleSearchMovies(moviesList) {};

  useEffect(function () {
    if (loggedIn) {
      moviesApi.getMovies().then((movies) => {
        setMovies(movies);
      }).catch((err) => { console.log(err) });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies movies={movies} />
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          }/>
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onUpdateUser={handleUpdateUser} handleSignOut={handleSignOut} />
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
