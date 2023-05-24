import React, { useEffect, useRef } from 'react';

function RoomAdminCalendar() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        const raMessageReceiver = (event) => {
            if (!event.data.sender || "ra-calendar-single-4d4419f19b95016e7957a397845b32e1" !== event.data.sender) { return; }
            if (event.data.height) { iframe.style.height = (event.data.height + 10) + "px"; }
        };
        window.addEventListener("message", raMessageReceiver, false);

        const setup = () => {
            try {
                iframe.contentWindow.postMessage({
                    location: window.location.toString(),
                    setup: { autoHeight: true, senderName : "ra-calendar-single-4d4419f19b95016e7957a397845b32e1" }
                }, "*");
            } catch (e) { console.error(e); }
        };

        setInterval(setup, 1000);
        iframe.addEventListener("load", setup);

        return () => window.removeEventListener("message", raMessageReceiver);
    }, []);

    return (
        <div>
            <iframe ref={iframeRef} id="ra-calendar-single-4d4419f19b95016e7957a397845b32e1" style={{width: '100%', height:'540px', border: 'none', padding: '0'}} src="//roomadmin.pl/widget/calendar-single/index?fh=cb81a00010bac72ae34311a71a167a269d02ac71&rid=77600&disableReservationButton=1&n=6&style=%7B%22color_accent%22%3A%22%23A1195B%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D"></iframe>
            <a href="https://roomadmin.pl">program dla obiektów noclegowych - roomadmin.pl</a>
        </div>
    );
}

export default RoomAdminCalendar;
