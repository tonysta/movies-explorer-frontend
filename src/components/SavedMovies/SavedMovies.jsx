import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <div className='saved-movies__wrapper'>
            <Header>
                <HeaderMain />
            </Header>
                <SearchForm />
                <MoviesCardList type="savedCards">
                    <MoviesCard type="savedCards" />
                    <MoviesCard type="savedCards" />
                    <MoviesCard type="savedCards" />
                </MoviesCardList>
            <Footer />
            </div>
        </>
    )
}

export default SavedMovies;