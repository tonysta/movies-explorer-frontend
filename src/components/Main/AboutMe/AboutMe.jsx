import React from "react";
import photo from '../../../images/photo.png';

function AboutMe() {
    return (
        <section id="about-me" className="about-me">
            <h3 className="landing-title about-me__title">Студент</h3>
            <div className="about-me__container">
                <article>
                    <h2 className="about-me__name">Виталий</h2>
                    <p className="about-me__short-desc">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__full-desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__github-profile-link" href="https://github.com/tonysta">Github</a>
                </article>
                <img className="about-me__photo" src={photo} alt="фото" />
            </div>
        </section>
    )
};

export default AboutMe;