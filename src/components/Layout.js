import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../global.css';

const Layout = ({ children }) => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="content-wrapper">
            {children}
            </div>

        <Footer />
        </div>
    );
};

export default Layout;
