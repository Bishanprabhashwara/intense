import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './MapModal.module.css';

const MapModal = ({ isOpen, onClose, onSelectRegion }) => {
    if (!isOpen) return null;

    const regions = ['North', 'North West', 'West', 'South East', 'Geelong'];

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.popupBox} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.popupContent}>
                    <div className={styles.welcomeSection}>
                        <h2 className={styles.popupTitle}>WELCOME</h2>
                        <p className={styles.popupText}>
                            Start building your dream home with Mimosa Homes today. 
                            Explore our V-Collection and customize your house to suit your needs. 
                            Create a personalized quote and let us help you bring your dream home to life.
                        </p>
                        <p className={styles.selectRegion}>
                            Begin by choosing your preferred build region
                        </p>
                    </div>
                    <div className={styles.regionsGrid}>
                        {regions.map(region => (
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
        </div>
    );
};

export default MapModal;