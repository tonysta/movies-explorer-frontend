import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

function Movies() {
    return (
        <>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                </MoviesCardList>
            </main>
            <Footer />
        </>
    )
}

export default Movies;