import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({children}) {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} alt='логотип' className='header__logo'/>
            </Link>
            {children}
        </header>
    )
}

export default Header;