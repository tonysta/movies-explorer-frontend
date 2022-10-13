import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import {
    BREAKPOINT_1280, 
    BREAKPOINT_768, 
    BREAKPOINT_480, 
    VISIBLE_MOVIES_12, 
    VISIBLE_MOVIES_8, 
    VISIBLE_MOVIES_5, 
    ADD_VISIBLE_MOVIES_4, 
    ADD_VISIBLE_MOVIES_2, 
    ADD_VISIBLE_MOVIES_5, 
} from '../../utils/constants';

function Movies( { onLike, likedMoviesIds, submitSearch, movies, preloader, hasLoaded, errMsg, setErrMsg, filterMovies, name, changeName, checkbox, changeCheckbox, onDelete } ) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [visibleMovies, setVisibleMovies] = useState(0);
    const [addMovies, setAddMovies] = useState(0);

    const handleAddVisibleMovies = () => {
        setVisibleMovies((movies) => movies + addMovies);
      };

    useEffect(() => {
        const handleChangeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        if (screenWidth <= BREAKPOINT_480) {
            setVisibleMovies(VISIBLE_MOVIES_5);
            setAddMovies(ADD_VISIBLE_MOVIES_5);
        } else if (
            screenWidth <= BREAKPOINT_768 &&
            screenWidth > BREAKPOINT_480
        ) {
            setVisibleMovies(VISIBLE_MOVIES_8);
            setAddMovies(ADD_VISIBLE_MOVIES_2);
        } else if (
            screenWidth <= BREAKPOINT_1280 &&
            screenWidth > BREAKPOINT_768
        ) {
            setVisibleMovies(VISIBLE_MOVIES_12);
            setAddMovies(ADD_VISIBLE_MOVIES_4);
        } else {
            setVisibleMovies(VISIBLE_MOVIES_12);
            setAddMovies(ADD_VISIBLE_MOVIES_4);
        }

        window.addEventListener('resize', handleChangeWidth);
        return () => {
            window.removeEventListener('resize', handleChangeWidth);
        };
    }, [screenWidth]);

   

    return (
        <div className='saved-movies__wrapper'>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <SearchForm 
                submitSearch={submitSearch}
                setErrMsg={setErrMsg}
                filterMovies={filterMovies}
                movies={movies} 
                name={name}
                changeName={changeName}
                checkbox={checkbox}
                changeCheckbox={changeCheckbox}/>
                    { preloader ? 
                        <Preloader /> : 
                        <MoviesCardList errMsg={errMsg} movies={movies} onAddMovies={handleAddVisibleMovies} hasLoaded={hasLoaded} visibleMovies={visibleMovies}>
                            {
                                movies.slice(0, visibleMovies).map((movie) => (
                                    <MoviesCard movie={movie} key={movie.id} onLike={onLike} isLiked={likedMoviesIds.includes(movie.id)} onDelete={onDelete}/>
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