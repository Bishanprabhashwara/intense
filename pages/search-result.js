"use client";

import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from "react-redux";

import PageTitle from '../components/pagetitle';
import Navbar from '../components/Navbar';
import { addToCart } from "../store/actions/action";
import api from "../api";
import Scrollbar from '../components/scrollbar';
import Footer from '../components/footer';
import HouseCard from '../components/HouseCard/HouseCard';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const SearchResults = ({ addToCart }) => {
    const router = useRouter();
    const { storeys, bedrooms, lotWidth } = router.query;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const houseImages = [
        "/images/indigosingle8.5/Indigo-155-Dutton-Twilight-350x225.png",
        "/images/indigosingle8.5/Indigo-155-Julia-Twilight-Scheme-350x225.png",
        "/images/indigosingle8.5/Indigo-155-Lotus-Twilight-350x225.png"
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % houseImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + houseImages.length) % houseImages.length);
    };

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const [searchParams, setSearchParams] = useState({
        storeys: storeys || '',
        bedrooms: bedrooms || '',
        lotWidth: lotWidth || '',
        homeSize: { min: 145, max: 500 }
    });

    const handleStoreyChange = (value) => {
        setSearchParams(prev => ({
            ...prev,
            storeys: value === prev.storeys ? '' : value
        }));
    };

    const handleBedroomChange = (value) => {
        setSearchParams(prev => ({
            ...prev,
            bedrooms: value === prev.bedrooms ? '' : value
        }));
    };

    const handleLotWidthChange = (value) => {
        setSearchParams(prev => ({
            ...prev,
            lotWidth: value === prev.lotWidth ? '' : value
        }));
    };

    const handleHomeSizeChange = (e) => {
        setSearchParams(prev => ({
            ...prev,
            homeSize: {
                ...prev.homeSize,
                max: parseInt(e.target.value)
            }
        }));
    };

    const renderSearchResults = () => {
        if (searchParams.storeys === 'Single' &&
            searchParams.bedrooms === '4' &&
            searchParams.lotWidth === '8.5m') {
            return (
                <>
                    <HouseCard
                        title="Indigo"
                        bedrooms={searchParams.bedrooms}
                        bathrooms="2"
                        garage="1"
                        lotWidth={searchParams.lotWidth}
                        depth="25m"
                        size="15.59sq"
                        floorPlan="/images/indigosingle8.5/Indigo-155-Left-1.png"
                        currentImage={houseImages[currentImageIndex]}
                        onPrevImage={prevImage}
                        onNextImage={nextImage}
                    />
                    <HouseCard
                        title="Molka"
                        bedrooms={searchParams.bedrooms}
                        bathrooms="2"
                        garage="1"
                        lotWidth={searchParams.lotWidth}
                        depth="25m"
                        size="15.21sq"
                        floorPlan="/images/indigosingle8.5/Indigo-155-Left-1.png"
                        currentImage={houseImages[currentImageIndex]}
                        onPrevImage={prevImage}
                        onNextImage={nextImage}
                    />
                    <HouseCard
                        title="Locksley"
                        bedrooms={searchParams.bedrooms}
                        bathrooms="2"
                        garage="1"
                        lotWidth={searchParams.lotWidth}
                        depth="25m"
                        size="13.13sq"
                        floorPlan="/images/indigosingle8.5/Indigo-155-Left-1.png"
                        currentImage={houseImages[currentImageIndex]}
                        onPrevImage={prevImage}
                        onNextImage={nextImage}
                    />
                </>
            );
        }

        if (searchParams.storeys === 'Single' &&
            searchParams.bedrooms === '3' &&
            searchParams.lotWidth === '8.5m') {
            return (
                <HouseCard
                    title="Indigo"
                    bedrooms="3"
                    bathrooms="2"
                    garage="1"
                    lotWidth="8.5 m"
                    depth="25m"
                    size="15.59sq"
                    floorPlan="/images/indigosingle8.5/Indigo-155-Left-1.png"
                    currentImage={houseImages[currentImageIndex]}
                    onPrevImage={prevImage}
                    onNextImage={nextImage}
                />
            );
        }

        return (
            <div className="col-12 text-center py-5">
                <h4>No matching houses found</h4>
                <p>Try adjusting your search criteria</p>
            </div>
        );
    };

    return (
        <Fragment>
            <ErrorBoundary>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Home Search'} pagesub={'Search'} />
                <section className="wpo-shop-page mt-4">
                <div className="container">
                    <div className="search-filters p-4 bg-light rounded mb-4">
                        <div className="row">
                            <div className="col-md-3">
                                <h6>Storeys</h6>
                                <div className="d-flex gap-2">
                                    <button
                                        onClick={() => handleStoreyChange('Single')}
                                        className={`btn ${searchParams.storeys === 'Single' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    >
                                        Single
                                    </button>
                                    <button
                                        onClick={() => handleStoreyChange('Double')}
                                        className={`btn ${searchParams.storeys === 'Double' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    >
                                        Double
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <h6>Bedrooms</h6>
                                <div className="d-flex gap-2">
                                    {[3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => handleBedroomChange(num.toString())}
                                            className={`btn ${searchParams.bedrooms === num.toString() ? 'btn-primary' : 'btn-outline-primary'}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <h6>Home Size (sq)</h6>
                                <div className="range-slider">
                                    <div className="d-flex justify-content-between">
                                        <span>MIN {searchParams.homeSize.min}sq</span>
                                        <span>MAX {searchParams.homeSize.max}sq</span>
                                    </div>
                                    <input
                                        type="range"
                                        className="form-range"
                                        min="145"
                                        max="500"
                                        value={searchParams.homeSize.max}
                                        onChange={handleHomeSizeChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <h6>Lot Width (m)</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {['8.5m', '10m', '10.5m', '12m', '12.5m', '14m', '16m'].map((width) => (
                                        <button
                                            key={width}
                                            onClick={() => handleLotWidthChange(width)}
                                            className={`btn btn-sm ${searchParams.lotWidth === width ? 'btn-primary' : 'btn-outline-primary'}`}
                                        >
                                            {width}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="search-results">
                        <div className="row">
                            {renderSearchResults()}
                        </div>
                    </div>
                </div>
            </section>
                <Footer />
                <Scrollbar />
            </ErrorBoundary>
        </Fragment>
    );
};

export default connect(null, { addToCart })(SearchResults);
