import React from 'react';
import Layout from "../components/Layout";
import '../global.css';
import HomePageTxt from "../components/HomePageTxt";

const HomePage = () => {
    return (
        <Layout>
            <div className="home-page-container">
            <div className="home-page-introduction">
                <HomePageTxt />
            </div>
                <div className="home-page-features">
                </div>
                <div className="home-page-awards">
                </div>
            </div>
        </Layout>

    );
};

export default HomePage;
