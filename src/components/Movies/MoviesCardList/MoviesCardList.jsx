import React from "react";

function MoviesCardList({type, children}) {
    return(
        <section className="movies-list">
            <div className="movies-list-container">
            {children}
            </div>
            <button type='button' className={type === "savedCards"? "movies-list__button-more_type_hidden":"movies-list__button-more"}>Еще</button>
        </section>
    )
}

export default MoviesCardList;