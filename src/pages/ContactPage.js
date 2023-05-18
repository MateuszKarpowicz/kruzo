import React from 'react';
import Layout from "../components/Layout";
import LefletMap from "../components/LeafletMap";
import ContactsClipBoardComponent from "../components/ContactsClipBoardComponent";
import BootstrapMailToForm from "../components/BootstrapMailToForm";

const ContactPage = () => {

    return (
        <Layout>
            <div className="contact-page-container">
                <LefletMap />
                <ContactsClipBoardComponent />
            </div>
        </Layout>
    );
};

export default ContactPage;
