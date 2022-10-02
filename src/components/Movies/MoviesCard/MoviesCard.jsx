import React from "react";

function MoviesCard({type, movie}) {
    const url = 'https://api.nomoreparties.co/'

    return(
        <article className="card">
            <img className="card__img" src={`${url}${movie.image.url}`} alt="название фильма" />
            <div className="card__title-container">
                <h2 className="card__title">{movie.nameRU}</h2>
                <button className={type === "savedCards" ? "card__like_type_remove" : "card__like"}></button>
            </div>
            <p className="card__duration">1ч42м</p>
        </article>
    )
}

export default MoviesCard;