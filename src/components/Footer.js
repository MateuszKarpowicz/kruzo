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

function Footer() {

    const handleButtonInsta = () => {
        window.open("https://www.instagram.com/crusoe_travel/", "_blank");
    };

    const handleButtonFb = () => {
        window.open("https://www.facebook.com/Crusoeapartamenty/?locale=pl_PL", "_blank");
    }

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-friends-container">
                    <div className="footer-friends-cava">
                        <img src={cavaFriends} alt="Cava Friends" />
                    </div>
                    <div className="footer-friends-anioly">
                        <img className="footer-friends-anioly-img" src={aniolyFriends} alt="Anioly Friends" />
                    </div>
                    <div className="footer-friends-nautica">
                        <img className="footer-friends-nautica-img" src={nauticaFriends} alt="Nautica Friends" />
                    </div>
                </div>
                <div className="footer-bandoc-pillow">
                    <img className="footer-bandoc-pillow-img" src={bandocPillowe} alt="Bandoc Pillow" />
                    <div className="footer-bandoc-logo">
                        <img className="footer-bandoc-logo-img" src={bandocLogo} alt="Bandoc Logo" />
                    </div>
                </div>
                <div className="footer-contact-container">
                    <div className="footer-texture">
                        <img className="footer-texture-img" src={footerTexture} alt="footer-texture" />
                    </div>
                    <div className="footer-contact">
                        <div className="footer-contact-header">
                        <span>Kontakt</span>
                        </div>
                        <div className="footer-contact-phone">
                        <img src={phoneNavbar} alt="phone-navbar" />
                        <span>+48885398888</span>
                        </div>
                        <div className="footer-contact-mail">
                        <img src={mailNavbar} alt="mail-navbar" />
                        <span>info@crusoe.info</span>
                        </div>
                    </div>
                    <div className="footer-social-links">
                        <div className="footer-social-links-header">
                        <span>Media społecznościowe</span>
                        </div>
                        <div className="footer-social-links-insta">
                        <img src={instaNavbar} alt="insta-navbar" onClick={handleButtonInsta} />
                        <span>Instagram</span>
                        </div>
                        <div className="footer-social-links-fb">
                        <img src={fbNavbar} alt="fb-navbar" onClick={handleButtonFb} />
                        <span>Facebook</span>
                        </div>
                    </div>
                    <div className="footer-apartments">
                        <div className="footer-apartments-header">
                        <span>Apartamenty</span>
                        </div>
                        <div className="footer-apartments-zakopane">
                            <img className="apartments-logo-zakopane" src={apartmentsLogo} alt="apartments-logo" />
                            <span>Zakopane</span>
                        </div>
                        <div className="footer-apartments-primosten">
                            <img className="apartments-logo-primosten" src={apartmentsLogo} alt="apartments-logo" />
                        <span>Primosten</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
