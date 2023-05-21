import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/GalleryPage.scss';

const SlickSlider = ({ isOpen, closeSlider, images, selectedImage }) => {
    if (!isOpen) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedImage,
    };

    return (
        <div className="slider-wrapper">
            <div className="slider-close" onClick={closeSlider}>
                &times;
            </div>
            <Slider {...settings} className="gallery-slider">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;
