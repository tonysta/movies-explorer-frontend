import React from 'react';
import { Link } from "react-router-dom";


function HeaderMain() {
    return (
        <div className='header-main__container'>
            <nav className='header-main__links-container'>
                <Link to='/movies' className='header-main__link'>Фильмы</Link>
                <Link to='/saved-movies' className='header-main__link'>Сохраненные фильмы</Link>
            </nav>
            <div className='header-main__account-container'>
                <Link to='/profile' className='header-main__account-link'>Аккаунт</Link>
                <div className='header-main__acc-icon'></div>
            </div>
        </div>
    )
}

export default HeaderMain;
