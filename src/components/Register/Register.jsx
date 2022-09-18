import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <main>
            <section className='register'>
                <img src={logo} alt='логотип' className='register__logo header__logo'/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <label className='register__input-container'>
                        <span className='register__input-label'>Имя</span>
                        <input
                            type='text'
                            name='text'
                            placeholder='Виталий'
                            className='register__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <label className='register__input-container'>
                        <span className='register__input-label'>E-mail</span>
                        <input
                            type='email'
                            name='e-mail'
                            placeholder='pochta@yandex.ru'
                            className='register__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <label className='register__input-container'>
                        <span className='register__input-label'>Пароль</span>
                        <input
                            type='password'
                            name='password'
                            placeholder='123'
                            className='register__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <span className='register__error'>Что-то пошло не так...</span>
                    <button className='register__submit' type='submit'>Зарегистрироваться</button>
                    <div className='register__login-link-container'>
                        <p className='register__login-link-desc'>Уже зарегистрированы?</p>
                        <Link to='/signin' className='register__login-link'>Войти</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register;
