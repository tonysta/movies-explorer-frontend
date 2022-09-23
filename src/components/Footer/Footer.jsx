import React from 'react';

function Footer() {
    return (
        <section className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className='footer__copyright footer__text'>&#169; 2022</p>
                <div className='footer__container-right'>
                    <p className='footer__company footer__text'>Яндекс.Практикум</p>
                    <a className='footer__github-link footer__text' target="_blank" href="https://github.com/tonysta/movies-explorer-frontend" rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;