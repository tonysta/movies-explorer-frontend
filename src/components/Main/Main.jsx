import React from 'react';
import Header from '../Header/Header';
import HeaderLanding from '../Header/HeaderLanding/HeaderLanding';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import Footer from '../Footer/Footer';


function Main() {
    return (
        <main>
            <Header>
              <HeaderLanding />  
            </Header>
            <Promo>
                <NavTab />
            </Promo>
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}

export default Main;