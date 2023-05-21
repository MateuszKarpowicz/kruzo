import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/HomePageTxt.scss"

const HomePageText = () => {
    const { t } = useTranslation();

    return (
        
            <div className="text-container">
                
                <h2>{t('homePageText.weProvide')}</h2>
                <ul>
                    <li>{t('homePageText.listItem1')}</li>
                    <li>{t('homePageText.listItem2')}</li>
                    <li>{t('homePageText.listItem3')}</li>
                    <li>{t('homePageText.listItem4')}</li>
                    <li>{t('homePageText.listItem5')}</li>
                </ul>
            </div>
    );
}

export default HomePageText;
