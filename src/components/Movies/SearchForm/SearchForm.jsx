import React from "react";

function SearchForm({ name,  checkbox, changeCheckbox, changeName, submitSearch}) {

    return(
        <section className="search">
            <form name="search-movie" className="search__form" onSubmit={submitSearch}>
                <div className="search__container">
                    <input 
                    type="text"
                    name="film"
                    placeholder="Фильм"
                    className="search__input-film"
                    required
                    minLength="1"
                    maxLength="40"
                    value={name}
                    onChange={changeName}
                    />
                    <div className="search__checkbox-container">
                        <label className="search__checkbox-label">
                            <input type="checkbox" className="search__checkbox-hidden" checked={checkbox} onChange={changeCheckbox} />
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