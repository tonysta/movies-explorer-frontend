import React from "react";

function MoviesCard({type, movie, onLike}) {
    const url = 'https://api.nomoreparties.co/';

    const handleLikeButton = () => {
        onLike(movie);
    };

    return(
        <article className="card">
            <img className="card__img" src={type === "savedMovies" ? `${movie.image}` : `${url}${movie.image.url}`} alt="название фильма" />
            <div className="card__title-container">
                <h2 className="card__title">{movie.nameRU}</h2>
                <button className={type === "savedMovies" ? "card__like_type_remove" : "card__like"} type='button' onClick={handleLikeButton}></button>
            </div>
            <p className="card__duration">{(movie.duration / 60).toString().slice(0, 1)}ч{movie.duration % 60}м</p>
        </article>
    )
}

export default MoviesCard;