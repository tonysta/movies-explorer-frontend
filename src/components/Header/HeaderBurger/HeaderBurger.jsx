import React from 'react';
import { Link } from "react-router-dom";


function HeaderBurger({isOpen, isClose}) {
    return (
        <div className={`header-burger__wrapper ` + (isOpen && 'header-burger__wrapper_type_active')}>
            <button className='header-burger__close-button' onClick={isClose}></button>
            <nav className='header-burger__links-container'>
                <div className='header-burger__center-links'>
                <Link to='/' className='header-burger__link'>Главная</Link>
                <Link to='/movies' className='header-burger__link'>Фильмы</Link>
                <Link to='/saved-movies' className='header-burger__link'>Сохраненные фильмы</Link>
                </div>
                <div className='header-main__account-container header-burger__account-container'>
                    <Link to='/profile' className='header-main__account-link'>Аккаунт</Link>
                    <div className='header-main__acc-icon'></div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderBurger;