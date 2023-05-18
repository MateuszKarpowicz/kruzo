import React from 'react';
import Layout from "../components/Layout";
import HomePageText from '../components/HomePageTxt';
import '../global.css';
import './HomePage.scss'
import BootstrapSlider from '../components/BootstrapSlider';
import SloganCrusoe from '../components/SloganCrusoe';
import Highlights from '../components/Highlights';
import Awards from '../components/Awards';
import RoomAdminWidget from '../components/RoomAdminWidget';
import Together from '../components/Together';
import BootstrapReviewCarusel from '../components/BootstrapReviewCarusel';


const HomePage = () => {
    return (
        <Layout>
            <div className="content-container">
                    <div className='content-container_up'>
                        <HomePageText />
                        <BootstrapSlider />
                    </div>
                    <div className='content-container_mid'>
                        <Highlights/>
                        <SloganCrusoe/>
                    </div>
                    <div className='content-container_lower'>
                        <RoomAdminWidget/>
                        <Awards/>
                        <Together/>
                    </div>
                    <div className='content-container_bottom'>
                        <BootstrapReviewCarusel/>
                    </div>
                </div>
        </Layout>
    );
};

export default HomePage;
