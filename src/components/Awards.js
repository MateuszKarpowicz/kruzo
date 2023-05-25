import React, { useEffect, useRef, useState } from 'react';
import '../scss/Awards.scss';
import bookingIcon from '../assets/awards/booking-icon.webp';
import tripIcon from '../assets/awards/trip-icon.webp';

const Awards = () => {
  const [showIcons, setShowIcons] = useState(false);
  const awardsRef = useRef(null);

  const handleScroll = () => {
    const element = awardsRef.current;
    const distanceFromTop = element.getBoundingClientRect().top;

    if (distanceFromTop - window.innerHeight + 100 <= 0) {
      setShowIcons(true);
    } else {
      setShowIcons(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="awards-container" ref={awardsRef}>
      <div className={`awards-icons ${showIcons ? 'show' : ''}`}>
        <div className="awards-trip" style={{ backgroundImage: `url(${tripIcon})` }}></div>
        <div className="awards-booking" style={{ backgroundImage: `url(${bookingIcon})` }}></div>
      </div>
    </div>
  );
};

export default Awards;
