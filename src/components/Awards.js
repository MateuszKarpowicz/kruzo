import React from 'react';
import '../scss/Awards.scss';
import bookingIcon from '../assets/awards/booking-icon.webp';
import tripIcon from '../assets/awards/trip-icon.webp';

const Awards = () => {

  return (
    <div className ="awards-container">
      <div className="awards-icons">
        <div className="awards-trip" style={{ backgroundImage: `url(${tripIcon})` }}></div>
        <div className="awards-booking" style={{ backgroundImage: `url(${bookingIcon})` }}></div>
      </div>
    </div>
    
          );
        }
        
        export default Awards;