import React from "react";

function AboutProject() {
    return (
        <section id="about-project" className="about-project">
            <h3 className="about-project__title landing-title">О проекте</h3>
            <div className="about-project__description-container">
                <article>
                    <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article>
                    <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about-project__statusbar-container">
                <div className="about-project__statusbar-item-1">
                    <div className="about-project__statusbar-text">1 неделя</div>
                    <div className="about-project__statusbar-desc">Back-end</div>
                </div>
                <div className="about-project__statusbar-item-2">
                    <div className="about-project__statusbar-text">4 недели</div>
                    <div className="about-project__statusbar-desc">Front-end</div>
                </div>
            </div>
        </section>
    )
};

export default AboutProject;