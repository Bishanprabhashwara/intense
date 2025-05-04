import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import MapPopup from '../components/MapPopup/MapPopup';
import {Dialog,DialogContent} from '@mui/material';
import img4 from '../public/images/Indigosingle8.5/Indigo-155-Left-1.png';
import img5 from '../public/images/10.5/Darley-178-Left-291x500.png';
import img6 from '../public/images/10.5/Fenwick-195-Left-265x500.png';
import img7 from '../public/images/10.5/Longwood-177-Left-1-297x500.png';
import img8 from '../public/images/10.5/Winton-188-Left-1-269x500.png';
import Bathtub from '@mui/icons-material/Bathtub.js';


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
        preview,
        storeys
    } = router.query;

    // Function to determine which floor plan image to use based on house specs
    const getFloorPlanImage = () => {
        if (bedrooms === '3' && lotWidth === '8.5m') {
            return img4;
        } else if (bedrooms === '3' && lotWidth === '10m') {
            return img4;
        } else if (bedrooms === '3' && lotWidth === '10.5m') {
            if (title === 'Fenwick') {
                return img6;
            } else if (title === 'Winton') {
                return img8;
            } else if (title === 'Longwood') {
                return img7;
            } else if (title === 'Darley') {
                return img5;
            }
        }
        return null;
    };

    // Define region multipliers outside of the calculatePrice function so it can be accessed in the JSX
    const regionMultipliers = {
        'North': 1.3,
        'North West': 1.2,
        'West': 1.1,
        'South East': 1.4,
        'Geelong': 1.0,
        // Default multiplier if region not found
        'default': 1.0
    };

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
        const basePricePerSqm = 15053.49;
        
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
    }, [bedrooms, bathrooms, garage, size, selectedRegion, regionMultipliers]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    // Function to handle proceeding to quote summary
    const handleProceedToSummary = () => {
        // Create an object with all the quote data
        const quoteData = {
            title,
            bedrooms,
            bathrooms,
            garage,
            lotWidth,
            depth,
            size,
            floorPlan,
            preview,
            selectedRegion,
            totalPrice: calculatePrice
        };
        
        // Convert to query string and navigate to summary page
        const queryString = new URLSearchParams(quoteData).toString();
        router.push(`/quote-summary?${queryString}`);
    };

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Build Quote'} pagesub={'Quote'} />
            
            {/* Progress Indicator */}
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark active">✓</span>
                                </div>
                                <div className="step-label">BUILD YOUR QUOTE</div>
                            </div>
                            <div className="progress-step">
                            <div className="step-circle">
                                    <span>2</span>
                                </div>
                                <div className="step-label">FLOORPLAN</div>
                            </div>
                            <div className="progress-step">
                            <div className="step-circle">
                                    <span>3</span>
                                </div>
                                <div className="step-label">FACADE</div>
                            </div>
                            <div className="progress-step">
                                <div className="step-circle">
                                    <span>4</span>
                                </div>
                                <div className="step-label">COLOURS</div>
                            </div>
                            <div className="progress-step">
                                <div className="step-circle">
                                    <span>5</span>
                                </div>
                                <div className="step-label">UPGRADES</div>
                            </div>
                            <div className="progress-step">
                                <div className="step-circle">
                                    <span>6</span>
                                </div>
                                <div className="step-label">SUMMARY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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
                    {/* Left Column - House Details */}
                    <div className="col-md-6">
                        <h2>{title} - Build Quote</h2>
                        {selectedRegion && (
                            <div className="selected-region mb-3">
                                <h5>Selected Region: {selectedRegion}</h5>
                            </div>
                        )}
                        <div className="specs-list mt-4">
                            {/* <h4>House Specifications:</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Bedrooms: {bedrooms}</li>
                                <li className="list-group-item">Bathrooms: {bathrooms}</li>
                                <li className="list-group-item">Garage: {garage}</li>
                                <li className="list-group-item">Lot Width: {lotWidth}</li>
                                <li className="list-group-item">Depth: {depth}</li>
                                <li className="list-group-item">Size: {size} m²</li>
                            </ul> */}
                            
                            {/* House Card Section - Styled like the image */}
                            <div className="house-card mt-5 border rounded overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-md-6 p-3">
                                        <Image
                                            src={getFloorPlanImage() || (floorPlan && typeof floorPlan === 'string' && 
                                                (floorPlan.startsWith('http') ? floorPlan : `/${floorPlan}`))}
                                            alt="Floor Plan"
                                            width={400}
                                            height={500}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-md-6 p-4">
                                        <h2 className="text-uppercase fw-bold mb-2">{title} {size}</h2>
                                        <a href="#" className="text-decoration-none text-primary">View Floorplan</a>
                                        
                                        <button className="btn btn-warning d-block my-3 w-100">INCLUSIONS</button>
                                        
                                        <div className="specs-icons my-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="me-3" style={{color: '#f47920', fontSize: '24px'}}>
                                                    <i className="fa fa-bed"></i>
                                                </span>
                                                <span className="fs-3">{bedrooms}</span>
                                            </div>
                                            
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="me-3" style={{color: '#f47920', fontSize: '24px'}}>
                                                <Bathtub style={{ display: 'flex', gap: '10px'}}/>
                                                </span>
                                                <span className="fs-3">{bathrooms}</span>
                                            </div>
                                            
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="me-3" style={{color: '#f47920', fontSize: '24px'}}>
                                                    <i className="fa fa-car"></i>
                                                </span>
                                                <span className="fs-3">{garage}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="house-dimensions mt-4">
                                            <p className="mb-1">Min Frontage: <span className="text-primary fw-bold">{lotWidth}</span></p>
                                            <p className="mb-1">Min Depth: <span className="text-primary fw-bold">{depth}</span></p>
                                            <p className="mb-1">Total Area: <span className="text-primary fw-bold">{size}sq</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-secondary text-white p-3 text-center">
                                    <h3 className="mb-0">$ {formatPrice(calculatePrice || 234684)}</h3>
                                </div>
                            </div>
                            
                            {/* {preview && typeof preview === 'string' && (
                                <div className="mt-4">
                                    <h4>House Preview</h4>
                                    <Image
                                        src={preview.startsWith('http') ? preview : `/${preview}`}
                                        alt="House Preview"
                                        width={400}
                                        height={300}
                                        className="img-fluid border"
                                    />
                                </div>
                            )} */}
                        </div>
                    </div>
                    
                    {/* Right Column - Price Breakdown */}
                    <div className="col-md-6">
                        {calculatePrice && (
                            <>
                                <div className="quote-summary p-4 bg-white border rounded shadow-sm" style={{ marginTop: '7rem' }}>
                                    <h2 className="mb-4">QUOTE SUMMARY</h2>
                                    
                                    <div className="floorplan-section mb-4">
                                        <h5 className="text-uppercase mb-3">FLOORPLAN</h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span>Floorplan Name:</span>
                                            <span className="text-primary">{title || 'Indigo 155'}</span>
                                            <span className="text-primary">${formatPrice(calculatePrice)}</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Subtotal:</span>
                                            <span className="text-primary">${formatPrice(calculatePrice)}</span>
                                        </div>
                                    </div>
                                    
                                    <hr className="my-4" />
                                    
                                    <div className="total-section">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">TOTAL:</h5>
                                            <h3 className="text-primary mb-0">${formatPrice(calculatePrice)}</h3>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <div className="price-breakdown mt-4">
                                    <h4>Price Breakdown:</h4>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Base Construction Cost:</span>
                                            <strong>${formatPrice(Math.round(parseFloat(size) * 1500))}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Bedrooms Premium:</span>
                                            <strong>+${formatPrice(Math.round(parseFloat(size) * 1500 * 0.05 * parseInt(bedrooms)))}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Bathrooms Premium:</span>
                                            <strong>+${formatPrice(Math.round(parseFloat(size) * 1500 * 0.07 * parseInt(bathrooms)))}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Garage Premium:</span>
                                            <strong>+${formatPrice(Math.round(parseFloat(size) * 1500 * 0.03 * parseInt(garage)))}</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Region Adjustment ({selectedRegion}):</span>
                                            <strong>×{(regionMultipliers[selectedRegion] || regionMultipliers.default).toFixed(1)}</strong>
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
                                </div> */}
                                
                                <div className="mt-4 d-grid">
                                    <button 
                                        className="btn btn-primary btn-lg" 
                                        onClick={handleProceedToSummary}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                        
                        {!calculatePrice && selectedRegion && (
                            <div className="alert alert-info">
                                <h4>Calculating your quote...</h4>
                                <p>We're preparing your personalized quote based on the information provided.</p>
                            </div>
                        )}
                        
                        {!selectedRegion && (
                            <div className="alert alert-warning">
                                <h4>Please Select a Region</h4>
                                <p>To get an accurate quote, please select your building region from the map.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildQuote;
