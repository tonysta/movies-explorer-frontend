import React from "react";

function MoviesCard({type, movie, onLike, onDelete, isLiked}) {
    const url = 'https://api.nomoreparties.co/';

    const handleLikeButton = () => {
        if (isLiked) {
            onDelete(movie)
        } else {
            onLike(movie);
        }
    };

    const handleDelete = () => {
        onDelete(movie)
    }

    return(
        <article className="card">
            <img className="card__img" src={type === "savedMovies" ? `${movie.image}` : `${url}${movie.image.url}`} alt="название фильма" />
            <div className="card__title-container">
                <h2 className="card__title">{movie.nameRU}</h2>
                {
                    type === "savedMovies" ?
                    <button className="card__like_type_remove" type='button' onClick={handleDelete}></button> :
                    <button className={isLiked ? "card__like_type_active" : "card__like"} type='button' onClick={handleLikeButton}></button>
                }
            </div>
            <p className="card__duration">{(movie.duration / 60).toString().slice(0, 1)}ч{movie.duration % 60}м</p>
        </article>
    )
}

export default MoviesCard;