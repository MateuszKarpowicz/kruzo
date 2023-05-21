import React  from "react";
import { useTranslation } from 'react-i18next';
import "../scss/InvitationTxt.scss"

const InvitationTxt = () => {
    const { t } = useTranslation();

    return (
        <div className="invitation-container">
            <div className="invitation-container__text">
                <h1>{t('invitationTxt.header')}</h1>
                <h2>{t('invitationTxt.subheader')}</h2>
            </div>
        </div>
    );
}

export default InvitationTxt;