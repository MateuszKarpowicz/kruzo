import React from 'react';
import { useTranslation } from 'react-i18next';

const ApartmentCard = ({ image, titleKey, descriptionKey, price, size }) => {
    const { t } = useTranslation();

    return (
        <div className="apartment-card">

            <div className="apartment-info">
                <h3>{t(titleKey)}</h3>
                <p>{t(descriptionKey)}</p>
                <p className="apartment-price">{price}</p>
                <p className="apartment-size">{size} m²</p>
            </div>
            <div className="apartment-image">
                <img src={image} alt={t(titleKey)} />
            </div>
        </div>
    );
};

export default ApartmentCard;
