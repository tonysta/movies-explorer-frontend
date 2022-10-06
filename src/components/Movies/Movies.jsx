import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies( { loggedIn, onLike } ) {

    const [movies, setMovies] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    function handleSearchMovie(name, checkbox) {
        if (loggedIn) {
            setPreloader(true);
            moviesApi.getMovies()
            .then((allMovies) => {
                let filteredMovies = allMovies
                    .filter((item) => item.nameRU.toLowerCase().includes(name.toLowerCase()))
                if (checkbox) {
                    filteredMovies = filteredMovies.filter((item) => (item.duration % 40) === 0)
                }
                setPreloader(false);
                setMovies(filteredMovies);
            }).catch((err) => {
                setPreloader(false);
                setErrMsg(true);
                console.log(err);
            })
        }
    }

    return (
        <div className='saved-movies__wrapper'>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <SearchForm onSearch={handleSearchMovie} setErrMsg={setErrMsg}/>
                    { preloader ? 
                        <Preloader /> : 
                        <MoviesCardList errMsg={errMsg} movies={movies}>
                            {  
                                movies.map((movie) => (
                                    <MoviesCard movie={movie} key={movie.id} onLike={onLike} />
                                ))
                            }
                        </MoviesCardList>
                    }
            </main>
            <Footer />
        </div>
    )
}

export default Movies;