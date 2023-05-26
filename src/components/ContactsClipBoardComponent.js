import React from 'react';
import useClipboard from "./useCopyToCliboard";
import {useTranslation} from "react-i18next";

const ContactsClipBoardComponent = () => {
    const copyToClipboard = useClipboard();
    const { t } = useTranslation();


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
                    <span className="contact-text">+48885398888</span>
                </div>
                <div className="contact-detail" onClick={() => copyToClipboard('email@example.com')}>
                    <span className="contact-icon">✉️</span>
                    <span className="contact-text">info@crusoe.info</span>
                </div>
            </div>
        </div>
    );
};

export default ContactsClipBoardComponent;
