import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/Together.scss"
import InstagramWidget from "./InstagramWidget";

const Together = () => {
  const { t } = useTranslation();

  return (
  <div className="together-container">

    <div className="together-text_container">
      <p>{t('togetherPage.description')}</p>
    </div>

    <div className="together-photo_container">
        <InstagramWidget />
    </div>
  </div>
  );
}
export default Together;