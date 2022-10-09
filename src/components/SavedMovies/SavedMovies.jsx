import React, {useState} from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function SavedMovies({savedMovies, onDelete, setName, setCheckbox, name, checkbox, filterMovies}) {

    const [filteredMovies, setFilteredMovies] = useState([])

    function handleSearchSavedMovie(name, checkbox) {
            let movies = savedMovies
                .filter((item) => item.nameRU.toLowerCase().includes(name.toLowerCase()))
            if (checkbox) {
                movies = filteredMovies.filter((item) => (item.duration <= 40))
            }
            setFilteredMovies(movies);
        }

    return (
            <div className='saved-movies__wrapper'>
                <Header>
                    <HeaderMain />
                </Header>
                <main>
                    <SearchForm onSavedSearch={handleSearchSavedMovie} type='savedMovies' setName={setName} setCheckbox={setCheckbox} name={name} checkbox={checkbox} filterMovies={filterMovies}/>
                    <MoviesCardList type="savedMovies">
                        {
                            filteredMovies.length !== 0 ?
                            filteredMovies.map((movie) => (
                                <MoviesCard movie={movie} key={movie._id} type='savedMovies' onDelete={onDelete}/>
                            )) :
                            savedMovies.map((movie) => (
                                <MoviesCard movie={movie} key={movie._id} type='savedMovies' onDelete={onDelete}/>
                            ))       
                        }
                    </MoviesCardList>
                </main>
                <Footer />
            </div>
    )
}

export default SavedMovies;