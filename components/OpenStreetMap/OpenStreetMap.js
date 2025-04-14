import React, { useEffect, useRef } from 'react';

const OpenStreetMap = ({ center, zoom = 10, onLoad }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        // Load Leaflet CSS
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        // Load Leaflet JS
        if (!window.L) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
            return () => {
                document.head.removeChild(script);
            };
        } else {
            initMap();
        }

        function initMap() {
            if (mapRef.current && !mapInstanceRef.current) {
                // Initialize map with Melbourne coordinates if none provided
                const defaultCenter = center || { lat: -37.8136, lng: 144.9631 };
                
                mapInstanceRef.current = window.L.map(mapRef.current, {
                    zoomControl: true,
                    scrollWheelZoom: false,
                    dragging: !window.L.Browser.mobile
                }).setView(
                    [defaultCenter.lat, defaultCenter.lng],
                    zoom
                );

                // Use a more visually appealing tile layer (Stamen Watercolor or Terrain)
                // Uncomment one of these options if you prefer a different style
                
                // Standard OpenStreetMap tiles
                window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19
                }).addTo(mapInstanceRef.current);
                
                // Optional: Add Melbourne city label
                window.L.marker([defaultCenter.lat, defaultCenter.lng], {
                    opacity: 0.6
                }).bindTooltip('Melbourne', {
                    permanent: true,
                    direction: 'center',
                    className: 'city-label'
                }).addTo(mapInstanceRef.current);

                if (onLoad) onLoad();
            }
        }

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    // Update map center and zoom when props change
    useEffect(() => {
        if (mapInstanceRef.current && center) {
            mapInstanceRef.current.setView([center.lat, center.lng], zoom);
        }
    }, [center, zoom]);

    return <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default OpenStreetMap;