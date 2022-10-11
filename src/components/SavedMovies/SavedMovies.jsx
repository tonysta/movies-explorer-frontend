import React, {useState} from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';

function SavedMovies({savedMovies, onDelete}) {

    const [ name, setName ] = useState('');
    const [ checkbox, setCheckbox ] = useState(false);

    const handleSearchSavedMovie = (event) => {
        event.preventDefault();
        setName(event.target.value);
        setCheckbox(event.target.checked);
    }
    
    const handleCheckboxChange = (event) => {
        setCheckbox(event.target.checked);
    }

    const handleNameChange = (event) => {
        const name = event.target.value;
        setName(name);
    }

    return (
            <div className='saved-movies__wrapper'>
                <Header>
                    <HeaderMain />
                </Header>
                <main>
                    <SearchForm 
                    name={name} 
                    checkbox={checkbox} 
                    changeCheckbox={handleCheckboxChange}
                    changeName={handleNameChange}
                    submitSearch={handleSearchSavedMovie}
                    />
                    <MoviesCardList type="savedMovies">
                        {
                            filterMovies(savedMovies, name, checkbox).map((movie) => (
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