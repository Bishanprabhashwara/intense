import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './MapPopup.module.css';
// const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: true });

// Alternative: OpenStreetMap with Leaflet
const OpenStreetMapComponent = dynamic(
  () => import('../OpenStreetMap/OpenStreetMap'),
  { ssr: false, loading: () => <div style={{ height: '400px', background: '#f0f0f0' }}>Loading map...</div> }
);

const MapPopup = ({ onClose, onSelectRegion }) => {
    const regions = ['North', 'North West', 'West', 'South East', 'Geelong'];
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapContainerRef = useRef(null);

    // Map region coordinates and paths (simplified for Melbourne regions)
    const regionPaths = {
        'North': {
            path: "M150,100 L200,50 L250,70 L270,120 L230,150 L180,140 Z",
            color: "#4CAF50",
            center: { x: 210, y: 100 },
            mapCenter: { lat: -37.65, lng: 145.05 }
        },
        'North West': {
            path: "M100,120 L150,100 L180,140 L170,180 L120,190 L80,160 Z",
            color: "#2196F3",
            center: { x: 130, y: 140 },
            mapCenter: { lat: -37.7, lng: 144.85 }
        },
        'West': {
            path: "M80,160 L120,190 L130,240 L90,270 L50,240 L40,190 Z",
            color: "#FFC107",
            center: { x: 85, y: 215 },
            mapCenter: { lat: -37.8, lng: 144.75 }
        },
        'South East': {
            path: "M230,150 L270,120 L320,140 L340,190 L300,230 L250,210 Z",
            color: "#FF5722",
            center: { x: 285, y: 175 },
            mapCenter: { lat: -37.9, lng: 145.2 }
        },
        'Geelong': {
            path: "M100,300 L150,280 L180,310 L160,350 L110,360 L80,330 Z",
            color: "#9C27B0",
            center: { x: 130, y: 320 },
            mapCenter: { lat: -38.15, lng: 144.35 }
        }
    };

    // Handle map center change when hovering over regions
    const handleRegionHover = (region) => {
        setHoveredRegion(region);
    };

    return (
        <div className={styles.mapPopupOverlay} onClick={onClose}>
            <div className={styles.mapPopupContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>WELCOME</h2>
                <p className={styles.welcomeText}>
                    Start building your dream home with Mimosa Homes today. 
                    Explore our V-Collection and customize your house to suit your needs. 
                    Create a personalized quote and let us help you bring your dream home to life.
                </p>
                <p className={styles.regionText}>Begin by choosing your preferred build region</p>
                
                {/* Melbourne Map with background map */}
                <div className={styles.mapContainer} ref={mapContainerRef}>
                    {/* OpenStreetMap background */}
                    <div className={styles.backgroundMap}>
                        <OpenStreetMapComponent 
                            center={hoveredRegion ? regionPaths[hoveredRegion].mapCenter : { lat: -37.8136, lng: 144.9631 }}
                            zoom={hoveredRegion ? 11 : 9}
                            onLoad={() => setMapLoaded(true)}
                        />
                    </div>
                    
                    {/* SVG overlay for regions */}
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 400 400" 
                        className={styles.melbourneMap}
                        style={{ opacity: mapLoaded ? 1 : 0.5 }}
                    >
                        {/* Region paths */}
                        {regions.map(region => (
                            <g key={region}>
                                <path
                                    d={regionPaths[region].path}
                                    fill={hoveredRegion === region ? regionPaths[region].color : `${regionPaths[region].color}80`}
                                    stroke="#333"
                                    strokeWidth="2"
                                    className={styles.regionPath}
                                    onMouseEnter={() => handleRegionHover(region)}
                                    onMouseLeave={() => handleRegionHover(null)}
                                    onClick={() => {
                                        onSelectRegion(region);
                                        onClose();
                                    }}
                                />
                                <text
                                    x={regionPaths[region].center.x}
                                    y={regionPaths[region].center.y}
                                    textAnchor="middle"
                                    fill="#333"
                                    fontSize="14"
                                    fontWeight="bold"
                                    className={styles.regionLabel}
                                >
                                    {region}
                                </text>
                            </g>
                        ))}
                    </svg>
                </div>
                
                <div className={styles.regionsGrid}>
                    {regions.map((region) => (
                        <button
                            key={region}
                            className={`${styles.regionButton} ${hoveredRegion === region ? styles.regionButtonActive : ''}`}
                            onClick={() => {
                                onSelectRegion(region);
                                onClose();
                            }}
                            onMouseEnter={() => handleRegionHover(region)}
                            onMouseLeave={() => handleRegionHover(null)}
                            style={{
                                backgroundColor: hoveredRegion === region ? regionPaths[region].color : 'transparent',
                                borderColor: regionPaths[region].color
                            }}
                        >
                            <span>{region}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MapPopup;