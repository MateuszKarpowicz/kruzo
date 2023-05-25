import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/Together.scss';
import InstagramWidget from './InstagramWidget';

const Together = () => {
  const { t } = useTranslation();
  const [showTextContainer, setShowTextContainer] = useState(false);
  const [showPhotoContainer, setShowPhotoContainer] = useState(false);
  const togetherRef = useRef(null);

  const handleScroll = () => {
    const element = togetherRef.current;
    const distanceFromTop = element.getBoundingClientRect().top;

    if (distanceFromTop - window.innerHeight + 100 <= 0) {
      setShowTextContainer(true);
      setShowPhotoContainer(true);
    } else {
      setShowTextContainer(false);
      setShowPhotoContainer(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="together-container" ref={togetherRef}>
      <div className={`together-text_container ${showTextContainer ? 'show' : ''}`}>
        <p>{t('togetherPage.description')}</p>
      </div>

      <div className={`together-photo_container ${showPhotoContainer ? 'show' : ''}`}>
        <InstagramWidget />
      </div>
    </div>
  );
};

export default Together;
