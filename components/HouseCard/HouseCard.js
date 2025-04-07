"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Changed from 'next/router' to 'next/navigation'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CropIcon from '@mui/icons-material/Crop';

const HouseCard = ({ 
    title,
    bedrooms,
    bathrooms,
    garage,
    lotWidth,
    depth,
    size,
    floorPlan,
    currentImage,
    onPrevImage,
    onNextImage
}) => {
    const router = useRouter();

    const handleBuildQuote = () => {
        // In App Router, we need to create the URL string
        const params = new URLSearchParams({
            title,
            bedrooms,
            bathrooms,
            garage,
            lotWidth,
            depth,
            size,
            floorPlan,
            preview: currentImage
        }).toString();
        
        router.push(`/build-quote?${params}`);
    };

    return (
        <div className="col-lg-12">
            <div className="house-card p-4 bg-white rounded shadow-sm">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="mb-3">{title}</h3>
                        <div className="house-stats d-flex gap-4 mb-3">
                            <div className="stat-item">
                                <BedIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{bedrooms}</span>
                            </div>
                            <div className="stat-item">
                                <BathtubIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{bathrooms}</span>
                            </div>
                            <div className="stat-item">
                                <DirectionsCarIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{garage}</span>
                            </div>
                            <div className="stat-item">
                                <SwapHorizIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{lotWidth}</span>
                            </div>
                            <div className="stat-item">
                                <SwapVertIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{depth}</span>
                            </div>
                            <div className="stat-item">
                                <CropIcon style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{size}</span>
                            </div>
                        </div>
                        <div className="action-buttons d-flex gap-2">
                            <button 
                                className="btn btn-outline-primary"
                                onClick={handleBuildQuote}
                            >
                                Build a Quote
                            </button>
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Image 
                            src={floorPlan}
                            alt="Floor Plan"
                            width={300}
                            height={100}
                            className="img-fluid"
                            style={{ width: "50%" }} 
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <div className="image-slider">
                                <div className="slider-container">
                                    <button 
                                        className="slider-arrow prev" 
                                        onClick={onPrevImage}
                                    >
                                        ‹
                                    </button>
                                    <Image 
                                        src={currentImage}
                                        alt="House Preview"
                                        width={300}
                                        height={225}
                                        className="img-fluid"
                                    />
                                    <button 
                                        className="slider-arrow next" 
                                        onClick={onNextImage}
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;