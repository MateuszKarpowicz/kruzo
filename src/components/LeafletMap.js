import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const LeafletMap = ({ t, handleGetDirectionsClick }) => {
    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [12, 41],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    const position = [52.22977, 21.01178];

    return (
        <div className="contact-map-section">
            <h2 className="column-title">{t('contactPage.mapLabel')}</h2>
            <div className="map-wrapper">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position}>
                        <Popup>{t('contactPage.mapPopup')}</Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="get-directions">
                <button className="custom-button" onClick={handleGetDirectionsClick}>
                    {t('contactPage.getDirectionsButton')}
                </button>
            </div>
        </div>
    );
};

export default LeafletMap;
