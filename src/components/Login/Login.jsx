import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { login } from '../../utils/Auth';

function Login({ handleLogin, setData }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(email, password)
            .then((data) => {
                if(data.token) {
                    localStorage.setItem('token', data.token);
                    setData({email});
                    handleLogin();
                    navigate("/");
                    setEmail('');
                    setPassword('');
                } else {
                    console.log(data.message);
                }

            }).catch((err) => console.log(err));
    }

    return (
        <main className='login'>
            <section className='auth'>
                <img src={logo} alt='логотип' className='auth__logo header__logo'/>
                <h1 className='auth__title'>Рады видеть!</h1>
                <form className='auth__form' name='login' onSubmit={handleSubmit}>
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
                            onChange={handleEmailChange}
                            value={email}
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
                            onChange={handlePasswordChange}
                            value={password}
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
