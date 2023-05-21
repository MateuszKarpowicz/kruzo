import React from 'react';
import Layout from "../components/Layout";
import LefletMap from "../components/LeafletMap";
import ContactsClipBoardComponent from "../components/ContactsClipBoardComponent";
import BootstrapMailToForm from "../components/BootstrapMailToForm";
import '../global.css';
import './ContactPage.scss'

const ContactPage = () => {

    return (
        <Layout>
            <div className="contact-page-container">
                <LefletMap />
                <ContactsClipBoardComponent />
                <BootstrapMailToForm />
            </div>
        </Layout>
    );
};

export default ContactPage;
