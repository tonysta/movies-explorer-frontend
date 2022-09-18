import React from "react";
import filmImg from '../../../images/33words.jpg'

function MoviesCard({type}) {

    return(
        <section className="card">
            <img className="card__img" src={filmImg} alt="название фильма" />
            <div className="card__title-container">
            <h2 className="card__title">33 слова о дизайне</h2>
            <button className={type === "savedCards" ? "card__like_type_remove" : "card__like"}></button>
            </div>
            <p className="card__duration">1ч42м</p>
        </section>
    )
}

export default MoviesCard;