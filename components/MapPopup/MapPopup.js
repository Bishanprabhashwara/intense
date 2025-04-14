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

    // Updated region paths to better match Melbourne's geography
    const regionPaths = {
        'North': {
            // Covers Craigieburn, Epping, South Morang areas
            path: "M200,80 L240,50 L280,70 L290,120 L260,150 L220,140 Z",
            color: "#4CAF50",
            center: { x: 250, y: 100 },
            mapCenter: { lat: -37.65, lng: 145.05 }
        },
        'North West': {
            // Covers Essendon, Moonee Ponds, Broadmeadows
            path: "M150,120 L200,100 L220,140 L210,180 L170,190 L130,160 Z",
            color: "#2196F3",
            center: { x: 180, y: 140 },
            mapCenter: { lat: -37.7, lng: 144.85 }
        },
        'West': {
            // Covers Footscray, Sunshine, Werribee
            path: "M130,160 L170,190 L160,240 L120,270 L80,240 L90,190 Z",
            color: "#FFC107",
            center: { x: 125, y: 215 },
            mapCenter: { lat: -37.8, lng: 144.75 }
        },
        'South East': {
            // Covers Dandenong, Cranbourne, Frankston
            path: "M260,150 L290,120 L330,140 L350,190 L310,230 L270,210 Z",
            color: "#FF5722",
            center: { x: 300, y: 175 },
            mapCenter: { lat: -37.9, lng: 145.2 }
        },
        'Geelong': {
            // Covers Geelong area
            path: "M80,300 L130,280 L160,310 L140,350 L90,360 L60,330 Z",
            color: "#9C27B0",
            center: { x: 110, y: 320 },
            mapCenter: { lat: -38.15, lng: 144.35 }
        }
    };

    // Handle map center change when hovering over regions
    const handleRegionHover = (region) => {
        setHoveredRegion(region);
    };

    // Calculate map bounds to ensure all regions are visible
    const getMapBounds = () => {
        return {
            center: { lat: -37.85, lng: 144.85 }, // Slightly adjusted center
            zoom: hoveredRegion ? 10 : 9
        };
    };

    const mapSettings = getMapBounds();

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
                            center={hoveredRegion ? regionPaths[hoveredRegion].mapCenter : mapSettings.center}
                            zoom={mapSettings.zoom}
                            onLoad={() => setMapLoaded(true)}
                        />
                    </div>
                    
                    {/* SVG overlay for regions - adjusted viewBox for better alignment */}
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 400 400" 
                        preserveAspectRatio="xMidYMid meet"
                        className={styles.melbourneMap}
                        style={{ opacity: mapLoaded ? 1 : 0.5 }}
                    >
                        {/* Port Phillip Bay representation */}
                        <path 
                            d="M170,180 C200,170 230,180 250,210 C270,240 260,280 230,300 C200,320 160,310 140,280 C120,250 140,190 170,180 Z" 
                            fill="#ADD8E6" 
                            fillOpacity="0.3"
                            stroke="#87CEEB" 
                            strokeWidth="1"
                        />
                        
                        {/* Region paths */}
                        {regions.map(region => (
                            <g key={region}>
                                <path
                                    d={regionPaths[region].path}
                                    fill={hoveredRegion === region ? regionPaths[region].color : `${regionPaths[region].color}80`}
                                    fillOpacity="0.6"
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
                                    pointerEvents="none"
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