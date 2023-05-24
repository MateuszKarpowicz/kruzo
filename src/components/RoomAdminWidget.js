import React, { useEffect, useRef } from 'react';
import '../scss/RoomAdminWidget.scss'
function BookingWidget() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        const raMessageReceiver = (event) => {
            if (!event.data.sender || "reservation-form-73de402afc2f5bf167bf327e9e44c91d" !== event.data.sender) { return; }
            if (event.data.height) { iframe.style.height = (event.data.height + 10) + "px"; }
            if (event.data.event && event.data.event.name === "widget.scrollup.requested") {
                try { iframe.scrollIntoView({behavior: "smooth", block: "start"}); } catch(e) {}
            }
        };
        window.addEventListener("message", raMessageReceiver, false);

        const setup = () => {
            try {
                iframe.contentWindow.postMessage({
                    location: window.location.toString(),
                    setup: { autoHeight: true, senderName : "reservation-form-73de402afc2f5bf167bf327e9e44c91d" }
                }, "*");
            } catch (e) { console.error(e); }
        };

        setInterval(setup, 1000);
        iframe.addEventListener("load", setup);

        return () => window.removeEventListener("message", raMessageReceiver);
    }, []);

    return (
        <div className="card booking-widget-container bg-dark text-light">
            <div className="card-header">
                <h3>Book a Room</h3>
            </div>
            <div className="card-body">
                <iframe ref={iframeRef} id="ra-reservation-form-v2-73de402afc2f5bf167bf327e9e44c91d" style={{width: '100%', height:'100px', border: 'none', padding: '0'}} src="https://roomadmin.pl/widget/reservation-v2/start?fh=cb81a00010bac72ae34311a71a167a269d02ac71&style=%7B%22color_accent%22%3A%22%23A1195B%22%2C%22color_bg%22%3A%22%23FFFFFF%22%2C%22color_panel_header%22%3A%22%23FFFFFF%22%2C%22color_panel_body%22%3A%22%23FFFFFF%22%2C%22rounded_corners%22%3Atrue%7D&filter=%7B%7D&lang=pl"></iframe>
            </div>
        </div>
    );
}

export default BookingWidget;
