import React from "react";

function SearchForm() {
    return(
        <section className="search">
            <form name="search-movie" className="search__form">
                <div className="search__container">
                    <input 
                    type="text"
                    name="film"
                    placeholder="Фильм"
                    className="search__input-film"
                    required
                    minLength="2"
                    maxLength="40" />
                    <div className="search__checkbox-container">
                    <label className="search__checkbox-label">
                        <input type="checkbox" className="search__checkbox-hidden"/>
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