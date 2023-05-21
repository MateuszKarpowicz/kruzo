import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/HeaderTxt.scss"

const HeaderTxt = () => {
    const { t } = useTranslation();

    return (
        <div className="header-container">
            <div className="header-container__text">
                <h1>{t('headerTxt.header')}</h1>
                <h2>{t('headerTxt.subheader')}</h2>
            </div>
        </div>
    );
}

export default HeaderTxt;