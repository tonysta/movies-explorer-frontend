import React from "react";

function Promo({children}) {
    return (
        <div className="promo__container">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            {children}
        </div>
    )
};

export default Promo;