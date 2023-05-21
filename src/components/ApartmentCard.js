import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../assets/apartment/Image1.jpg'
import HighlightsApartmentCard from "./HighlightsApartmentCard";
import ApartmentCardGraphic from "../assets/apartmentcard/apartments-card-texture-down.png";

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
                        <p>{t('apartmentCard.feature1')}</p>
                        <p>{t('apartmentCard.feature2')}</p>
                        <p>{t('apartmentCard.feature3')}</p>
                        <p>{t('apartmentCard.feature4')}</p>
                        <p>{t('apartmentCard.feature5')}</p>
                        <p>{t('apartmentCard.feature6')}</p>
                        <p>{t('apartmentCard.feature7')}</p>
                    </div>
                </div>
            </div>
            <div className="apartment-card-content-down">
                <div className="apartment-card-content-highlights">
                    <HighlightsApartmentCard />
                </div>
                <div className="apartment-card-graphic">
                    <img src={ApartmentCardGraphic} alt="apartment-card-graphic" />
                </div>

            </div>
        </div>
</div>
    );
};

export default ApartmentCard;
