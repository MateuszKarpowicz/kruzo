import React from 'react';
import Layout from "../components/Layout";
import BookingWidget from '../components/RoomAdminWidget';
import BookingCalendar from '../components/RoomAdminCalendar';
import './ReservationPage.scss';
const ReservationPage = () => {
    return (
        <Layout>
            <div className='booking-container'>
                <div className='booking-widget'>
                <BookingWidget />
                </div>
                <div className='booking-calendar'>
                <BookingCalendar />
                </div>
            </div>
            
        </Layout>
    );
};

export default ReservationPage;
