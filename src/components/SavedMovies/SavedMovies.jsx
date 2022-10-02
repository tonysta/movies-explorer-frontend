import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
            <div className='saved-movies__wrapper'>
                <Header>
                    <HeaderMain />
                </Header>
                <main>
                    <SearchForm />
                    <MoviesCardList type="savedCards">
                        <MoviesCard type="savedCards" />
                    </MoviesCardList>
                </main>
                <Footer />
            </div>
    )
}

export default SavedMovies;