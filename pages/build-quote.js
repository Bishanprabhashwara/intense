import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import MapPopup from '../components/MapPopup/MapPopup';

// const Dialog = dynamic(() => import('@mui/material/Dialog'), { ssr: true });
// const DialogContent = dynamic(() => import('@mui/material/DialogContent/index.js'), { ssr: true });
import {Dialog,DialogContent} from '@mui/material';

const BuildQuote = () => {
    const router = useRouter();
    const [showMap, setShowMap] = useState(true);
    const [selectedRegion, setSelectedRegion] = useState('');
    const { 
        title, 
        bedrooms, 
        bathrooms, 
        garage, 
        lotWidth, 
        depth, 
        size, 
        floorPlan, 
        preview 
    } = router.query;

    useEffect(() => {
        // Show map popup when component mounts
        setShowMap(true);
    }, []);

    // Calculate the price based on specifications
    const calculatePrice = useMemo(() => {
        if (!bedrooms || !bathrooms || !garage || !size || !selectedRegion) {
            return null;
        }

        // Base price per square meter
        const basePricePerSqm = 1500;
        
        // Region multipliers
        const regionMultipliers = {
            'Sydney': 1.5,
            'Melbourne': 1.3,
            'Brisbane': 1.1,
            'Perth': 1.0,
            'Adelaide': 0.9,
            'Gold Coast': 1.2,
            'Newcastle': 0.95,
            'Canberra': 1.25,
            // Default multiplier if region not found
            'default': 1.0
        };
        
        // Get region multiplier or use default
        const regionMultiplier = regionMultipliers[selectedRegion] || regionMultipliers.default;
        
        // Calculate base price from size
        let totalPrice = parseFloat(size) * basePricePerSqm;
        
        // Add for bedrooms (each bedroom adds 5% to base price)
        totalPrice += totalPrice * (0.05 * parseInt(bedrooms));
        
        // Add for bathrooms (each bathroom adds 7% to base price)
        totalPrice += totalPrice * (0.07 * parseInt(bathrooms));
        
        // Add for garage (each garage space adds 3% to base price)
        totalPrice += totalPrice * (0.03 * parseInt(garage));
        
        // Apply region multiplier
        totalPrice *= regionMultiplier;
        
        // Round to nearest thousand
        return Math.round(totalPrice / 1000) * 1000;
    }, [bedrooms, bathrooms, garage, size, selectedRegion]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Build Quote'} pagesub={'Quote'} />
            
            <Dialog 
                open={showMap}
                onClose={() => setShowMap(false)}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    style: {
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }
                }}
            >
                <DialogContent style={{ padding: 0 }}>
                    <MapPopup 
                        onClose={() => setShowMap(false)}
                        onSelectRegion={setSelectedRegion}
                    />
                </DialogContent>
            </Dialog>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{title} - Build Quote</h2>
                        {selectedRegion && (
                            <div className="selected-region mb-3">
                                <h5>Selected Region: {selectedRegion}</h5>
                                <div className="price-estimate mt-2 p-3 bg-light border rounded">
                                    <h3 className="text-primary">Estimated Build Price</h3>
                                    <h2 className="display-4">${formatPrice(calculatePrice)}</h2>
                                    <p className="text-muted">This is an estimate based on your specifications and location</p>
                                </div>
                            </div>
                        )}
                        <div className="specs-list mt-4">
                            <h4>House Specifications:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Bedrooms: {bedrooms}</li>
                                <li className="list-group-item">Bathrooms: {bathrooms}</li>
                                <li className="list-group-item">Garage: {garage}</li>
                                <li className="list-group-item">Lot Width: {lotWidth}</li>
                                <li className="list-group-item">Depth: {depth}</li>
                                <li className="list-group-item">Size: {size} m²</li>
                            </ul>
                            
                            {calculatePrice && (
                                <div className="price-breakdown mt-4">
                                    <h4>Price Breakdown:</h4>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Base Construction Cost:</span>
                                            <strong>${formatPrice(Math.round(parseFloat(size) * 1500))}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Region Adjustment:</span>
                                            <strong>{selectedRegion} Factor</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Features & Fixtures:</span>
                                            <strong>Premium Quality</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between bg-light">
                                            <span>Total Estimated Price:</span>
                                            <strong className="text-primary">${formatPrice(calculatePrice)}</strong>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="images-container">
                            {floorPlan && typeof floorPlan === 'string' && (
                                <div className="mb-4">
                                    <h4>Floor Plan</h4>
                                    <Image
                                        src={floorPlan.startsWith('http') ? floorPlan : `/${floorPlan}`}
                                        alt="Floor Plan"
                                        width={400}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </div>
                            )}
                            {preview && typeof preview === 'string' && (
                                <div>
                                    <h4>House Preview</h4>
                                    <Image
                                        src={preview.startsWith('http') ? preview : `/${preview}`}
                                        alt="House Preview"
                                        width={400}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default BuildQuote;