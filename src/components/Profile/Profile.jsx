import React from 'react';
import Header from '../Header/Header';
import HeaderMain from '../Header/HeaderMain/HeaderMain';

function Profile() {
    return (
        <>
            <Header>
                <HeaderMain />
            </Header>
            <main>
                <section className='profile__container'>
                    <h1 className='profile__title'>Привет, Виталий!</h1>
                    <form className='profile__form-container'>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>Имя</h3>
                            <input
                                name='name'
                                className='profile__input'
                                type="text" 
                                placeholder='Виталий'
                                required
                                minLength="2"
                                maxLength="30"
                                />
                        </label>
                        <label className='profile__input-container'>
                            <h3 className='profile__input-desc'>E-mail</h3>
                            <input
                                name='e-mail'
                                className='profile__input'
                                type="text"
                                placeholder='pochta@yandex.ru'
                                required
                                minLength="2"
                                maxLength="30"
                                />
                        </label>
                    </form>
                    <div className='profile__button-container'>
                        <button className='profile__button_type_edit'>Редактировать</button>
                        <button className='profile__button_type_exit'>Выйти из аккаунта</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;