import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../assets/apartment/Image1.jpg'
import Highlights from "./Highlights";
import "../scss/ApartmentCard.scss";

const ApartmentCard = () => {
    const { t } = useTranslation();

    return (
        <div className="apartment-card">
            <div className="apartment-card-title">
                <h3>{t('apartmentCard.title')}</h3>
                <p>{t('apartmentCard.titlePS')}</p>

            </div>
            <div className="apartment-card-content">
                <div className="apartment-card-content-up">
                <div className="apartment-card-image">
                <img src={Image} alt="apartment" />
                    <div className="apartment-card-features-txt">
                        <p>{t('apartmentCard.features')}</p>
                    </div>
                </div>
            </div>
            <div className="apartment-card-content-down">
                <div className="apartment-card-content-highlights">
                    <Highlights />
                </div>
                <div className="apartment-card-content-description">
                    <p>{t('apartmentCard.description')}</p>
                </div>
            </div>
        </div>
</div>
    );
};

export default ApartmentCard;
