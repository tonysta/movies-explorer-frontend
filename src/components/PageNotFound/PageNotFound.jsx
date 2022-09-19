import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <main className='page-not-found'>
            <section className='page-not-found__container'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__desc'>Страница не найдена</p>
                <button className='page-not-found__back-button' onClick={() => navigate(-1)}>Назад</button>
            </section>
        </main>
    )
}

export default PageNotFound;
