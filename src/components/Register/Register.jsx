import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <main>
            <section className='auth'>
                <img src={logo} alt='логотип' className='auth__logo header__logo'/>
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <form className='auth__form'>
                    <label className='auth__input-container'>
                        <span className='auth__input-label'>Имя</span>
                        <input
                            type='text'
                            name='text'
                            placeholder='Виталий'
                            className='auth__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <label className='auth__input-container'>
                        <span className='auth__input-label'>E-mail</span>
                        <input
                            type='email'
                            name='e-mail'
                            placeholder='pochta@yandex.ru'
                            className='auth__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <label className='auth__input-container'>
                        <span className='auth__input-label'>Пароль</span>
                        <input
                            type='password'
                            name='password'
                            placeholder='123'
                            className='auth__input'
                            minLength='2'
                            maxLength='30'
                            required
                            />
                    </label>
                    <span className='auth__error'>Что-то пошло не так...</span>
                    <button className='auth__submit' type='button'>Зарегистрироваться</button>
                    <div className='auth__login-link-container'>
                        <p className='auth__login-link-desc'>Уже зарегистрированы?</p>
                        <Link to='/signin' className='auth__login-link'>Войти</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register;
