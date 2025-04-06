import React, { useState, useEffect } from 'react';
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
                                <li className="list-group-item">Size: {size}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="images-container">
                            {floorPlan && (
                                <div className="mb-4">
                                    <h4>Floor Plan</h4>
                                    <Image
                                        src={floorPlan}
                                        alt="Floor Plan"
                                        width={400}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </div>
                            )}
                            {preview && (
                                <div>
                                    <h4>House Preview</h4>
                                    <Image
                                        src={preview}
                                        alt="House Preview"
                                        width={400}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildQuote;