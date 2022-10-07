import React from 'react';
import logo from '../../images/logo.svg';
import { register } from '../../utils/Auth';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [success, setSuccess] = React.useState(true);

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        register(
            name,
            email,
            password
        ).then((res) => {
                setSuccess(true);
        }).catch((err) =>{
            setSuccess(false);
            console.log(err)
        })
            .finally((res) =>{
                setName('');
                setEmail('');
                setPassword('');
            });
    }

    return (
        
        <main>
            <section className='auth'>
                <img src={logo} alt='логотип' className='auth__logo header__logo'/>
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
                            value={name || ''}
                            onChange={handleNameChange}
                            />
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
                            value={email || ''}
                            onChange={handleEmailChange}
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
                            value={password || ''}
                            onChange={handlePasswordChange}
                            />
                    </label>
                    <span className='auth__error'>{success ? '' : 'Что-то пошло не так...' }</span>
                    <button className='auth__submit' type='submit'>Зарегистрироваться</button>
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
