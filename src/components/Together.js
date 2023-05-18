import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/Together.scss"

const Together = () => {
  const { t } = useTranslation();

  return (
  <div className="together-container">

    <div className="together-text_container">
      <h3>{t('togetherPage.title')}</h3>
      <p>{t('togetherPage.description')}</p>
      <p>{t('togetherPage.website')}</p>
    </div>

    <div className="together-photo_container">

    </div>
  </div>
  );
}
export default Together;