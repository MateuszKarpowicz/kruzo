import React from 'react';
import aniolyFriends from '../assets/footer/friends-anioly.png'
import cavaFriends from '../assets/footer/friends-cava.png'
import nauticaFriends from '../assets/footer/friends-nautica.png'
import bandocPillowe from '../assets/footer/footer-bandoc-pillow.png'
import bandocLogo from '../assets/footer/bandoc-logo.png'
import fbNavbar from '../assets/navbar/fb-navbar.png'
import instaNavbar from '../assets/navbar/insta-navbar.png'
import phoneNavbar from '../assets/navbar/phone-navbar.png'
import mailNavbar from '../assets/navbar/mail-navbar.png'
import footerTexture from '../assets/footer/footer-texture.png'
import apartmentsLogo from '../assets/footer/apartments-logo.png'
import { Link } from "react-router-dom";

function Footer() {

    const handleButtonInsta = () => {
        window.open("https://www.instagram.com/crusoe_travel/", "_blank");
    };

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
        <div className="footer-wrapper">
            <div className="footer-container">
            <div className="footer-friends-container">
                    <div className="footer-friends-cava">
                    <a href="https://wolt.com/pl/pol/krakow/restaurant/bonjour-cava"><img className="footer-friends-cava-img" src={cavaFriends} alt="Cava Friends" /></a>
                    </div>
                    <div className="footer-friends-anioly">
                    <a href="https://www.piekne-anioly.org/"><img className="footer-friends-anioly-img" src={aniolyFriends} alt="Anioly Friends" /></a>
                    </div>
                    <div className="footer-friends-nautica">
                    <a href="https://nautica.pl/"><img className="footer-friends-nautica-img" src={nauticaFriends} alt="Nautica Friends" /></a>
                    </div>
                </div>
                <div className="footer-bandoc-pillow">
                    <img className="footer-bandoc-pillow-img" src={bandocPillowe} alt="Bandoc Pillow" />
                    <div className="footer-bandoc-logo">
                    <a href="https:/bandofcreators.com/"><img className="footer-bandoc-logo-img" src={bandocLogo} alt="Bandoc Logo" /></a>
                    </div>
                </div>
                <div className="footer-contact-container">
                    <div className="footer-texture">
                        <img className="footer-texture-img" src={footerTexture} alt="footer-texture" />
                    </div>
                    <div className="footer-contact">
                        <div className="footer-contact-text-box">
                            <div className="footer-contact-header">
                                <span>Kontakt</span>
                            </div>
                            <div className="footer-contact-phone" onClick={handleButtonPhone}>
                                <img src={phoneNavbar} alt="phone-navbar" />
                                <span>+48 885 398 888</span>
                            </div>
                            <div className="footer-contact-mail" onClick={handleButtonMail}>
                                <img src={mailNavbar} alt="mail-navbar" />
                                <span>info@crusoe.info</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-social-links">
                        <div className="footer-social-links-text-box">
                        <div className="footer-social-links-header">
                        <span>Media</span>
                        </div>
                            <div className="footer-social-links-insta" onClick={handleButtonInsta}>
                                <img src={instaNavbar} alt="insta-navbar" />
                                <span>Instagram</span>
                            </div>

                            <div className="footer-social-links-fb" onClick={handleButtonFb}>
                                <img src={fbNavbar} alt="fb-navbar" />
                                <span>Facebook</span>
                            </div>

                    </div>
                    </div>
                    <div className="footer-apartments">
                        <div className="footer-apartments-header">
                        <span>Apartamenty</span>
                        </div>
                        <div className="footer-apartments-krakow">
                            <img className="apartments-logo-zakopane" src={apartmentsLogo} alt="apartments-logo" />
                            <Link to="/krakow"><span>Kraków</span></Link>
                        </div>
                        <div className="footer-apartments-primosten">
                            <img className="apartments-logo-primosten" src={apartmentsLogo} alt="apartments-logo" />
                            <Link to="/primosten"><span>Primosten</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
