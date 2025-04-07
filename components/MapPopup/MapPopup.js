import React from 'react';
import dynamic from 'next/dynamic';

const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: true });
import styles from './MapPopup.module.css';

const MapPopup = ({ onClose, onSelectRegion }) => {
    const regions = ['North', 'North West', 'West', 'South East', 'Geelong'];

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
                <div className={styles.regionsGrid}>
                    {regions.map((region) => (
                        <button
                            key={region}
                            className={styles.regionButton}
                            onClick={() => {
                                onSelectRegion(region);
                                onClose();
                            }}
                        >
                            <FaMapMarkerAlt className={styles.regionIcon} />
                            <span>{region}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MapPopup;