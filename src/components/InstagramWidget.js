import React from 'react';

const InstagramWidget = () => {
    const instagramUrl = 'https://www.instagram.com/p/BrsMB3cnTYw/embed';

    return (
        <div className="instagram-widget">
            <iframe
                title="Instagram Post"
                src={instagramUrl}
                width="100%"
                height="750"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default InstagramWidget;
