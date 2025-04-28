import { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ onSelectRegion, onClose }) => {
    const melbourneCenter = [-37.8136, 144.9631];
    const regions = {
        'North': [
            [-37.6513, 144.9631],
            [-37.7013, 145.0631],
            [-37.7513, 144.8631],
        ],
        'North West': [
            [-37.7013, 144.7631],
            [-37.7513, 144.8631],
            [-37.8013, 144.7631],
        ],
        'West': [
            [-37.8013, 144.7631],
            [-37.8513, 144.8631],
            [-37.9013, 144.7631],
        ],
        'South East': [
            [-37.9513, 145.1631],
            [-38.0013, 145.2631],
            [-38.0513, 145.1631],
        ],
        'Geelong': [
            [-38.1513, 144.3631],
            [-38.2013, 144.4631],
            [-38.2513, 144.3631],
        ]
    };

    useEffect(() => {
        // Fix for leaflet icon issues
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });
    }, []);

    return (
        <MapContainer
            center={melbourneCenter}
            zoom={9}
            style={{ height: "400px", width: "100%" }}
            zoomControl={true}
        >
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                maxZoom={20}
            />
            {Object.entries(regions).map(([name, coordinates]) => (
                <Polygon
                    key={name}
                    positions={coordinates}
                    pathOptions={{
                        fillColor: '#ff6b35',
                        fillOpacity: 0.3,
                        color: '#ff6b35',
                        weight: 2
                    }}
                    eventHandlers={{
                        click: () => {
                            onSelectRegion(name);
                            onClose();
                        },
                        mouseover: (e) => {
                            const layer = e.target;
                            layer.setStyle({ fillOpacity: 0.7 });
                        },
                        mouseout: (e) => {
                            const layer = e.target;
                            layer.setStyle({ fillOpacity: 0.3 });
                        }
                    }}
                />
            ))}
        </MapContainer>
    );
};

export default MapComponent;