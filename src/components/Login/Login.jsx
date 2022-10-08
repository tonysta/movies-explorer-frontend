import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { login } from '../../utils/Auth';
import { useFormWithValidation } from '../../utils/validation';

function Login({ handleLogin, setData }) {
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const validate = useFormWithValidation();
    const { email, password } = validate.errors;

    function handleSubmit(event) {
        event.preventDefault();
        const { email, password } = validate.values;
        login(email, password)
            .then((data) => {
                if(data.token) {
                    localStorage.setItem('token', data.token);
                    setData({email});
                    handleLogin();
                    validate.resetForm();
                    navigate("/movies");
                } else {
                    console.log(data.message);
                }
            }).catch((err) => {
            if (err === 401) {
                setErrMsg('Вы ввели неправильный логин или пароль.')
            } else {
                setErrMsg('При авторизации произошла ошибка.')
            }
            console.log(err);
        });
    }

    return (
        <main className='login'>
            <section className='auth'>
                <img src={logo} alt='логотип' className='auth__logo header__logo'/>
                <h1 className='auth__title'>Рады видеть!</h1>
                <form className='auth__form' name='login' onSubmit={handleSubmit} noValidate>
                    <label className='auth__input-container'>
                        <span className='auth__input-label'>E-mail</span>
                        <input
                            type='email'
                            name='email'
                            placeholder='pochta@yandex.ru'
                            className='auth__input'
                            minLength='2'
                            maxLength='30'
                            required
                            pattern='^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+[,;]?[ ]?)+$'
                            onChange={validate.handleChange}
                            value={validate.values.email || ''}
                            />
                            <span className='auth__input-error'>{email}</span>
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
                            onChange={validate.handleChange}
                            value={validate.values.password || ''}
                            />
                            <span className='auth__input-error'>{password}</span>
                    </label>
                    <span className='auth__error'>{errMsg}</span>
                    <button className={validate.isValid === true ? 'auth__submit login__submit' : 'login__submit auth__submit_type_disabled'} type='submit' disabled={validate.isValid === false}>Войти</button>
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
