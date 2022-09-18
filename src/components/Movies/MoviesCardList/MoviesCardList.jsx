import React from "react";

function MoviesCardList({children}) {
    return(
        <section className="movies-list">
            <div className="movies-list-container">
            {children}
            </div>
            <button type='button' className="movies-list__button-more">Еще</button>
        </section>
    )
}

export default MoviesCardList;