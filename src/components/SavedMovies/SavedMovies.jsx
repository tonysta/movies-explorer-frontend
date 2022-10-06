import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies({savedMovies}) {
    
    return (
            <div className='saved-movies__wrapper'>
                <Header>
                    <HeaderMain />
                </Header>
                <main>
                    <SearchForm />
                    <MoviesCardList type="savedMovies">
                    {   
                        savedMovies.map((movie) => (
                            <MoviesCard movie={movie} key={movie._id} type='savedMovies'/>
                        ))
                    }
                    </MoviesCardList>
                </main>
                <Footer />
            </div>
    )
}

export default SavedMovies;