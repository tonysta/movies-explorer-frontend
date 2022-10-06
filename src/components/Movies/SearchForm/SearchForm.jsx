import React, {useState} from "react";

function SearchForm({onSearch, setErrMsg, onSavedSearch, type}) {

    const [name, setName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleCheckboxChange() {
        setCheckbox(!checkbox);
    }

    function handleSearch(event) {
        event.preventDefault();
        if (type === 'savedMovies') {
            onSavedSearch(name, checkbox);
        } else {
            onSearch(name, checkbox);
            setErrMsg(false);
        }
    }

    return(
        <section className="search">
            <form name="search-movie" className="search__form" onSubmit={handleSearch}>
                <div className="search__container">
                    <input 
                    type="text"
                    name="film"
                    placeholder="Фильм"
                    className="search__input-film"
                    required
                    minLength="2"
                    maxLength="40"
                    value={name || ''}
                    onChange={handleNameChange}
                    />
                    <div className="search__checkbox-container">
                        <label className="search__checkbox-label">
                            <input type="checkbox" className="search__checkbox-hidden" value={checkbox} onChange={handleCheckboxChange} />
                            <span className="search__checkbox"></span>
                        </label>
                        <p className="search__checkbox-desc">Короткометражки</p>
                    </div>
                </div>
                <button type="submit" className="search__submit"></button>
            </form>
        </section>
    )
}

export default SearchForm;