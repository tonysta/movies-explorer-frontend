import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validation';

function Register({onRegister, errMsg}) {

    const validate = useFormWithValidation();
    const { name, email, password } = validate.errors;

    function handleSubmit(event) {
        event.preventDefault();
        const { name, email, password } = validate.values;
        onRegister(name, email, password);
        validate.resetForm();
    }

    return (
        
        <main>
            <section className='auth'>
                <Link to='/'>
                    <img src={logo} alt='логотип' className='auth__logo header__logo'/>
                </Link>
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <form className='auth__form' name='register' onSubmit={handleSubmit} noValidate >
                    <label className='auth__input-container'>
                        <span className='auth__input-label'>Имя</span>
                        <input
                            type='text'
                            name='name'
                            placeholder='Виталий'
                            className='auth__input'
                            minLength='2'
                            maxLength='30'
                            required
                            pattern='[A-Za-zА-Яа-яЁё]+'
                            value={validate.values.name || ''}
                            onChange={validate.handleChange}
                            />
                        <span className='auth__input-error'>{name}</span>
                    </label>
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
                            value={validate.values.email || ''}
                            onChange={validate.handleChange}
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
                            value={validate.values.password || ''}
                            onChange={validate.handleChange}
                            />
                            <span className='auth__input-error'>{password}</span>
                    </label>
                    <span className='auth__error'>{errMsg}</span>
                    <button className={validate.isValid === true ? 'auth__submit' : 'auth__submit_type_disabled'} type='submit' disabled={validate.isValid === false} >Зарегистрироваться</button>
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
