import React from 'react';
import Layout from "../components/Layout";
import BookingWidget from '../components/RoomAdminWidget';
import BookingCalendar from '../components/RoomAdminCalendar';

const ReservationPage = () => {
    return (
        <Layout>
            <BookingWidget />
            <BookingCalendar />
        </Layout>
    );
};

export default ReservationPage;
