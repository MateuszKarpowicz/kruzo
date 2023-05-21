import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/WeProvide.scss"
import apartmentsLogo from '../assets/footer/apartments-logo.png'


const WeProvide = () => {
    const { t } = useTranslation();

    return (

        <div className="home-text-container">
            <h2>{t('homePageText.weProvide')}</h2>
            <ul style={{ '--logo-url': `url(${apartmentsLogo})` }}>
                <li><span></span>{t('homePageText.listItem1')}</li>
                <li><span></span>{t('homePageText.listItem2')}</li>
                <li><span></span>{t('homePageText.listItem3')}</li>
                <li><span></span>{t('homePageText.listItem4')}</li>
                <li><span></span>{t('homePageText.listItem5')}</li>
            </ul>
        </div>
    );
}

export default WeProvide;
