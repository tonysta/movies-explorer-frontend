import React from "react";

function MoviesCardList({type, children, errMsg, movies, onAddMovies, hasLoaded}) {

    return(
        <section className="movies-list">
            <div className="movies-list__container">
                {children}
            </div>
            {
                type === "savedMovies" ?
                <>
                </> :
                <>
                <h2 className={movies.length === 0 && !errMsg && hasLoaded ? 'movies-list__not-found_type_active' : 'movies-list__not-found'}>Ничего не найдено.</h2>
                <h2 className={errMsg ? 'movies-list__error-msg_type_active' : 'movies-list__error-msg'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</h2>
                <button type='button' className={type === "savedMovies"? "movies-list__button-more_type_hidden":"movies-list__button-more"} onClick={onAddMovies}>Еще</button>
                </>
            }
        </section>
    )
}

export default MoviesCardList;