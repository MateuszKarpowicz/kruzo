import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImage1 from '../assets/apartment/Image1.jpg';
import sliderImage2 from '../assets/apartment/Image2.jpg';
import sliderImage3 from '../assets/apartment/Image3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootstrapSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default BootstrapSlider;