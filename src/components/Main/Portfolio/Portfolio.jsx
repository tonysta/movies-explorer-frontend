import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__container">
                <li className="portfolio__item">
                    <a target="_blank" href="https://tonysta.github.io/how-to-learn/" className="portfolio__link" rel="noreferrer">
                        <p className="portfolio__desc">Статичный сайт</p>
                        <div className="portfolio__link-icon">&#8599;</div>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a target="_blank" href="https://tonysta.github.io/russian-travel/" className="portfolio__link" rel="noreferrer">
                        <p className="portfolio__desc">Адаптивный сайт</p>
                        <div className="portfolio__link-icon">&#8599;</div>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a target="_blank" href="https://tonysta.github.io/mesto/" className="portfolio__link" rel="noreferrer">
                        <p className="portfolio__desc">Одностраничное приложение</p>
                        <div className="portfolio__link-icon">&#8599;</div>
                    </a>
                </li>
            </ul>
        </section>
    )
};

export default Portfolio;