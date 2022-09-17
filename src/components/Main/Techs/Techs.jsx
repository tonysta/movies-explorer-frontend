import React from "react";

function Techs() {
    return (
        <section id='techs' className="techs">
            <h3 className="landing-title techs__title">Технологии</h3>
            <h2 className="techs__big-title">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__techs-container">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    )
};

export default Techs;