import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <main className='login'>
            <section className='auth'>
                <img src={logo} alt='логотип' className='auth__logo header__logo'/>
                <h1 className='auth__title'>Рады видеть!</h1>
                <form className='auth__form'>
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
                    <button className='auth__submit login__submit' type='submit'>Войти</button>
                    <div className='auth__login-link-container'>
                        <p className='auth__login-link-desc'>Еще не зарегистрированы?</p>
                        <Link to='/signup' className='auth__login-link'>Регистрация</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login;
