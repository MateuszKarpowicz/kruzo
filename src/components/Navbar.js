import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoNavbar from '../assets/navbar/logo-navbar.png'
import topNavbar from '../assets/navbar/top-navbar-background.png'
import rightNavbar from '../assets/navbar/navbar-right-stripe-for-links.png'
import surferHead from '../assets/navbar/surferhead.png'
import fbNavbar from '../assets/navbar/fb-navbar.png'
import instaNavbar from '../assets/navbar/insta-navbar.png'
import phoneNavbar from '../assets/navbar/phone-navbar.png'
import mailNavbar from '../assets/navbar/mail-navbar.png'
import plFlag from '../assets/navbar/pl-flag.png'
import gbFlag from '../assets/navbar/gb-flag.png'
import surferClicker from '../assets/navbar/surfer-clikker.png'



function Navbar() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('pl');
    const [isMenuOpen, setIsMenuOpen] = useState(localStorage.getItem("isMenuOpen") === "true" || false);

    useEffect(() => {
        localStorage.setItem("isMenuOpen", isMenuOpen);
    }, [isMenuOpen]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    }
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }



    const handleButtonInsta = () => {
        window.open("https://www.instagram.com/crusoe_travel/", "_blank");    };

    const handleButtonFb = () => {
        window.open("https://www.facebook.com/Crusoeapartamenty/?locale=pl_PL", "_blank");
    }

    const handleButtonMail = () => {
        window.location.href = "mailto:info@crusoe.info";
    }

    const handleButtonPhone = () => {
        window.location.href = "tel:+48885398888";
    }

return (
        <nav className="navbar-wrapper">
            <div className="navbar-container">
                <div className="navbar-background-container" style={{ backgroundImage: `url(${topNavbar})`}} >
                </div>
                <div className="navbar-right-container">
                    <img className="navbar-right-container-img" src={rightNavbar} alt="logo" />
                        <div className="navbar-language-container">
                                <img src={gbFlag} alt="gb-flag" onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''} />
                                <img src={plFlag} alt="pl-flag" onClick={() => changeLanguage('pl')} className={language === 'pl' ? 'active' : ''} />
                        </div>
                        <div className="navbar-social-links-buttons">
                            <div className="navbar-social-links-insta">
                            <img src={instaNavbar} alt="insta-navbar" onClick={handleButtonInsta} />
                            </div>
                            <div className="navbar-social-links-fb">
                            <img src={fbNavbar} alt="fb-navbar" onClick={handleButtonFb} />
                            </div>
                            <div className="navbar-social-links-phone">
                            <img src={phoneNavbar} alt="phone-navbar" onClick={handleButtonPhone}/>
                            </div>
                            <div className="navbar-social-links-mail">
                            <img src={mailNavbar} alt="mail-navbar" onClick={handleButtonMail} />
                            </div>
                        </div>
                </div>
                <div className="navbar-logo-container" >
                <img className="navbar-logo-container-img" src={logoNavbar} alt="logo" />
                    <img className="surfer-clicker-img" src={surferClicker} alt="surfer-clicker" onClick={handleMenuClick} />
                </div>
                <div className={`pages-buttons-container ${isMenuOpen ? 'open' : ''}`}>

                    <ul className="pages-buttons">
                    <li className="page-button">
                        <NavLink to="/" exact activeClassName="nav-link active" className="nav-link">
                            {t('CRUSOE')}
                        </NavLink>
                    </li>
                    <li className="page-button">
                        <NavLink to="/apartments" activeClassName="nav-link active" className="nav-link">
                            {t('APARTMENTS')}
                        </NavLink>
                    </li>
                    <li className="page-button">
                        <NavLink to="/gallery" activeClassName="nav-link active" className="nav-link">
                            {t('GALLERY')}
                        </NavLink>
                    </li>
                    <li className="page-button">
                        <NavLink to="/contact" activeClassName="nav-link active" className="nav-link">
                            {t('CONTACT')}
                        </NavLink>
                    </li>
                    <li className="page-button-book">
                        <NavLink to="/reservation" activeClassName="nav-link active-book" className="nav-link-book">
                            {t('BOOK')}
                        </NavLink>
                    </li>
                    <li className="surfer-head">
                        <img className="surfer-head-img" src={surferHead} alt="head" />
                    </li>
                </ul>
                    </div>
                </div>

        </nav>



    );
}

export default Navbar;


