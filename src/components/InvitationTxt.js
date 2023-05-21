import React  from "react";
import { useTranslation } from 'react-i18next';
import "../scss/InvitationTxt.scss"

const InvitationTxt = () => {
    const { t } = useTranslation();

    return (
        <div className="invitation-container">
            <div className="invitation-container-text">
                <h2>{t('invitationTxt.description')}</h2>
            </div>
        </div>
    );
}

export default InvitationTxt;