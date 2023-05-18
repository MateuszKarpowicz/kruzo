import React from 'react';
import useClipboard from "./useCopyToCliboard";

const ContactsClipBoardComponent = ({ t }) => {
    const copyToClipboard = useClipboard();

    return (
        <div>
            <div className="contact-banner">
                <div className="contact-banner-content">
                    <div className="contact-text">
                        <h2 className="column-title">{t('contactPage.title')}</h2>
                        <p>{t('contactPage.description')}</p>
                    </div>
                </div>
            </div>
            <div className="contact-details">
                <div className="contact-detail" onClick={() => copyToClipboard('123-456-789')}>
                    <span className="contact-icon">📞</span>
                    <span className="contact-text">123-456-789</span>
                    <span className="copy-text">{t('contactPage.copy')}</span>
                </div>
                <div className="contact-detail" onClick={() => copyToClipboard('email@example.com')}>
                    <span className="contact-icon">✉️</span>
                    <span className="contact-text">email@example.com</span>
                    <span className="copy-text">{t('contactPage.copy')}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactsClipBoardComponent;
