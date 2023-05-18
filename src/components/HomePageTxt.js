import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePageText = () => {
    const { t } = useTranslation();

    return (
        <div className="col-md-6">
            <div className="text-container">
                <p>{t('homePageText.description')}</p>
            </div>
            <div className="text-container mt-4">
                <h2>{t('homePageText.weProvide')}</h2>
                <ul>
                    <li>{t('homePageText.listItem1')}</li>
                    <li>{t('homePageText.listItem2')}</li>
                    <li>{t('homePageText.listItem3')}</li>
                    <li>{t('homePageText.listItem4')}</li>
                    <li>{t('homePageText.listItem5')}</li>
                </ul>
            </div>
        </div>
    );
}

export default HomePageText;
