"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Bed from '@mui/icons-material/Bed.js';
import Bathtub from '@mui/icons-material/Bathtub.js';
import DirectionsCar from '@mui/icons-material/DirectionsCar.js';
import SwapHoriz from '@mui/icons-material/SwapHoriz.js';
import SwapVert from '@mui/icons-material/SwapVert.js';
import Crop from '@mui/icons-material/Crop.js';

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
                                <Bed style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{bedrooms}</span>
                            </div>
                            <div className="stat-item">
                                <Bathtub style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{bathrooms}</span>
                            </div>
                            <div className="stat-item">
                                <DirectionsCar style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{garage}</span>
                            </div>
                            <div className="stat-item">
                                <SwapHoriz style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{lotWidth}</span>
                            </div>
                            <div className="stat-item">
                                <SwapVert style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
                                <span>{depth}</span>
                            </div>
                            <div className="stat-item">
                                <Crop style={{ display: 'flex', gap: '10px', color: 'orange' }}/>
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