import React from 'react';
import { useTranslation } from 'react-i18next';
import "../scss/SloganCrusoe.scss";

const SloganCrusoe = () => {
    const { t } = useTranslation();

    return (
<div className ="slogan-crusoe_container">
  <div className ="slogan-crusoe_texts">
    <h3>{t('sloganCrusoe.title')}</h3>
    <p>{t('sloganCrusoe.description')}</p>
  </div>
</div>

      );
    }
    
    export default SloganCrusoe;