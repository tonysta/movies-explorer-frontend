import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function Movies( { onLike, likedMoviesIds, handleSearchMovie, movies, preloader, hasLoaded, errMsg, setErrMsg, filterMovies, name, setName, checkbox, setCheckbox } ) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [visibleMovies, setVisibleMovies] = useState(0);
    const [addMovies, setAddMovies] = useState(0);

    const breakpoint_1280 = 1280;
    const breakpoint_768 = 768;
    const breakpoint_480 = 480;

    const visibleMovies_12 = 12;
    const visibleMovies_8 = 8;
    const visibleMovies_5 = 5;
    
    const addVisibleMovies_4 = 4;
    const addVisibleMovies_2 = 2;
    const addVisibleMovies_5 = 5;

    const handleAddVisibleMovies = () => {
        setVisibleMovies((movies) => movies + addMovies);
      };

    useEffect(() => {
        const handleChangeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        if (screenWidth <= breakpoint_480) {
            setVisibleMovies(visibleMovies_5);
            setAddMovies(addVisibleMovies_5);
        } else if (
            screenWidth <= breakpoint_768 &&
            screenWidth > breakpoint_480
        ) {
            setVisibleMovies(visibleMovies_8);
            setAddMovies(addVisibleMovies_2);
        } else if (
            screenWidth <= breakpoint_1280 &&
            screenWidth > breakpoint_768
        ) {
            setVisibleMovies(visibleMovies_12);
            setAddMovies(addVisibleMovies_4);
        } else {
            setVisibleMovies(visibleMovies_12);
            setAddMovies(addVisibleMovies_4);
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
                onSearch={handleSearchMovie}
                setErrMsg={setErrMsg} 
                filterMovies={filterMovies}
                movies={movies} 
                name={name}
                setName={setName}
                checkbox={checkbox}
                setCheckbox={setCheckbox}/>
                    { preloader ? 
                        <Preloader /> : 
                        <MoviesCardList errMsg={errMsg} movies={movies} onAddMovies={handleAddVisibleMovies} hasLoaded={hasLoaded} visibleMovies={visibleMovies}>
                            {
                                movies.slice(0, visibleMovies).map((movie) => (
                                    <MoviesCard movie={movie} key={movie.id} onLike={onLike} isLiked={likedMoviesIds.includes(movie.id)}/>
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