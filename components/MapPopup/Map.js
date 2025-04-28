import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(
    () => import('./MapComponent'),
    { 
        ssr: false,
        loading: () => (
            <div style={{ 
                height: "400px", 
                width: "100%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "4px"
            }}>
                Loading map...
            </div>
        )
    }
);

const Map = ({ onSelectRegion, onClose }) => {
    return <MapWithNoSSR onSelectRegion={onSelectRegion} onClose={onClose} />;
};

export default Map;