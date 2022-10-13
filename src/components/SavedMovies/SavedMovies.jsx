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
    const [ notFoundSavedMsg, setNotFoundSavedMsg] = useState(false);

    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

    

    const handleSearchSavedMovie = (event) => {
        event.preventDefault();
        if (filterMovies(savedMovies, name, checkbox).length !== 0) {
            setNotFoundSavedMsg(false);
            setFilteredSavedMovies(filterMovies(savedMovies, name, checkbox));
        } else {
            setNotFoundSavedMsg(true);
        }
        
    }
    
    const handleCheckboxChange = (event) => {
        setCheckbox(event.target.checked);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
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
                            notFoundSavedMsg ? 
                                <h2 className='movies-list__not-found-saved_type_active'>Ничего не найдено.</h2> :

                                (filteredSavedMovies.length !== 0 ? filteredSavedMovies : savedMovies)
                                .map((movie) => (
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