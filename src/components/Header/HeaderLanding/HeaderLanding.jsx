import React from 'react';
import { Link } from "react-router-dom";


function HeaderLanding() {
    return (
        <div className='header-landing__container'>
            <Link to='/signup' className='header-landing__register-link'>Регистрация</Link>
            <Link to='/signin' className='header-landing__login-button'>Войти</Link>
        </div>
    )
}

export default HeaderLanding;