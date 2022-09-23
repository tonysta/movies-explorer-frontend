import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HeaderBurger from '../HeaderBurger/HeaderBurger';


function HeaderMain() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    function openBurger() {
        setIsBurgerOpen(true);
    }
    
    function closeBurger() {
        setIsBurgerOpen(false);
    }

    return (
        <>
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
        <button type='button' className='header-main__burger-button' onClick={openBurger}></button>
        <HeaderBurger isOpen={isBurgerOpen} isClose={closeBurger}/>
        </>
    )
}

export default HeaderMain;
