import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';
import img1 from '../public/images/interior/Kitchen-Birch.jpg';
import img2 from '../public/images/interior/Kitchen-Palm.jpg';
import img3 from '../public/images/interior/Kitchen-Dove.jpg';
import img4 from '../public/images/interior/Kitchen-Ebony.jpg';
import img5 from '../public/images/interior/Kitchen-Maple.jpg';
import img6 from '../public/images/interior/Kitchen-Raven.jpg';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InteriorDesign = () => {
    const router = useRouter();
    const [quoteData, setQuoteData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedInteriorStyle, setSelectedInteriorStyle] = useState('birch');
    const [adjustedPrice, setAdjustedPrice] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    // Interior style options
    const interiorStyles = {
        birch: {
            name: 'Birch',
            description: 'Clean and bright kitchen design with white cabinetry and natural wood accents',
            image: img1,
            priceAdjustment: 0 // Included in base price
        },
        palm: {
            name: 'Palm',
            description: 'Light and airy kitchen design with soft neutral tones and minimalist styling',
            image: img2,
            priceAdjustment: 395 // Included in base price
        },
        dove: {
            name: 'Dove',
            description: 'Elegant kitchen design with light cabinetry and subtle contemporary touches',
            image: img3,
            priceAdjustment: 395 // Additional cost
        },
        ebony: {
            name: 'Ebony',
            description: 'Bold kitchen design with dark cabinetry contrasted with light countertops',
            image: img4,
            priceAdjustment: 395 // Included in base price
        },
        maple: {
            name: 'Maple',
            description: 'Warm kitchen design with dark cabinetry and natural wood elements',
            image: img5, // Update with correct image
            priceAdjustment: 395 // Included in base price
        },
        raven: {
            name: 'Raven',
            description: 'Modern kitchen design with dark cabinetry and sleek contemporary finishes',
            image: img6, // Update with correct image
            priceAdjustment: 395 // Additional cost
        }
    };
    // classic: {
    //         name: 'Classic',
    //         description: 'Timeless elegance with traditional elements and neutral tones',
    //         image: img1,
    //         priceAdjustment: 0 // Base price, no adjustment
    //     },
    //     contemporary: {
    //         name: 'Contemporary',
    //         description: 'Clean lines, minimal decoration, and a focus on space and shape',
    //         image: img2,
    //         priceAdjustment: 7500
    //     },
    //     scandinavian: {
    //         name: 'Scandinavian',
    //         description: 'Light, airy spaces with functional furniture and minimal accessories',
    //         image: img3,
    //         priceAdjustment: 6200
    //     },
    //     industrial: {
    //         name: 'Industrial',
    //         description: 'Raw, unfinished look with exposed brick, metal, and wood elements',
    //         image: img4,
    //         priceAdjustment: 8800
    //     },
    //     bohemian: {
    //         name: 'Bohemian',
    //         description: 'Eclectic mix of patterns, textures, and colors with a carefree aesthetic',
    //         image: img1, // Reusing images
    //         priceAdjustment: 5500
    //     },
    //     farmhouse: {
    //         name: 'Modern Farmhouse',
    //         description: 'Rustic charm with modern amenities, featuring natural textures and vintage accents',
    //         image: img2, // Reusing images
    //         priceAdjustment: 4800
    //     }
    // };

    useEffect(() => {
        // Wait for router to be ready
        if (!router.isReady) return;
        
        // Extract all query parameters
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
            selectedRegion,
            totalPrice,
            selectedColorScheme,
            colorSchemePrice,
            quoteRef,
            quoteDate
        } = router.query;

        // Set the quote data
        setQuoteData({
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
            totalPrice: totalPrice || "0",
            selectedColorScheme,
            colorSchemePrice,
            quoteRef,
            quoteDate
        });
        
        setLoading(false);
    }, [router.isReady, router.query]);

    // Calculate adjusted price when quote data or interior style changes
    useEffect(() => {
        if (quoteData.totalPrice) {
            const basePrice = parseInt(quoteData.totalPrice.replace(/,/g, ''), 10) || 0;
            const adjustment = interiorStyles[selectedInteriorStyle]?.priceAdjustment || 0;
            setAdjustedPrice(basePrice + adjustment);
        }
    }, [quoteData.totalPrice, selectedInteriorStyle]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    // Handle interior style selection
    const handleInteriorStyleChange = (style) => {
        setSelectedInteriorStyle(style);
    };

    // Handle interior style confirmation
    const handleInteriorStyleConfirm = () => {
        // Create an object with all the quote data and selected options
        const updatedData = {
            ...quoteData,
            selectedInteriorStyle: interiorStyles[selectedInteriorStyle].name,
            interiorStylePrice: interiorStyles[selectedInteriorStyle].priceAdjustment,
            totalPrice: adjustedPrice
        };
        
        // Convert to query string and navigate to summary page
        const queryString = new URLSearchParams(updatedData).toString();
        router.push(`/quote-summary?${queryString}`);
    };

    if (loading) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Interior Design Selection'} pagesub={'Customization'} />
                <div className="container my-5 text-center">
                    <h3>Loading quote data...</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Select Your Interior Style'} pagesub={'Customization'} />
            
            {/* Progress Indicator */}
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">BUILD YOUR QUOTE</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">FLOORPLAN</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">FACADE</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">COLOURS</div>
                            </div>
                            <div className="progress-step active">
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
            
            <div className="container my-5">
                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="mb-0">Choose Your Interior Style</h3>
                            <div className="text-end">
                                <div>Quote #: {quoteData.quoteRef}</div>
                                <div>Date: {quoteData.quoteDate}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h4>{quoteData.title}</h4>
                                <p className="text-muted mb-0">Region: {quoteData.selectedRegion}</p>
                                <p className="text-muted mb-0">Color Scheme: {quoteData.selectedColorScheme}</p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <h2 className="text-primary mb-0">${formatPrice(quoteData.totalPrice)}</h2>
                                <p className="text-muted">Current Price</p>
                            </div>
                        </div>
                        
                        <hr />
                        
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-center mb-4">Select Your Interior Style</h5>
                                <p className="text-center text-muted mb-4">Choose an interior design style that reflects your personal taste and lifestyle. This will influence fixtures, finishes, and overall aesthetic of your home's interior.</p>
                                
                                {/* Interior Style Slider */}
                                <div className="interior-style-slider mb-5">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                            },
                                        }}
                                        onSlideChange={(swiper) => {
                                            setActiveSlide(swiper.activeIndex);
                                            const styleKeys = Object.keys(interiorStyles);
                                            if (styleKeys[swiper.activeIndex]) {
                                                handleInteriorStyleChange(styleKeys[swiper.activeIndex]);
                                            }
                                        }}
                                        className="mySwiper"
                                    >
                                        {Object.keys(interiorStyles).map((style) => (
                                            <SwiperSlide key={style}>
                                                <div 
                                                    className={`card h-100 ${selectedInteriorStyle === style ? 'border-primary border-3' : ''}`}
                                                    onClick={() => handleInteriorStyleChange(style)}
                                                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                >
                                                    <div className="position-relative" style={{ height: '220px' }}>
                                                        <Image
                                                            src={interiorStyles[style].image}
                                                            alt={interiorStyles[style].name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="card-img-top"
                                                        />
                                                        {selectedInteriorStyle === style && (
                                                            <div className="position-absolute top-0 end-0 p-2">
                                                                <span className="badge bg-primary">Selected</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{interiorStyles[style].name}</h5>
                                                        <p className="card-text">{interiorStyles[style].description}</p>
                                                        <div className="mt-3">
                                                            <span className={`badge ${style === 'classic' ? 'bg-success' : 'bg-secondary'} p-2`}>
                                                                {style === 'classic' ? 'Included in Base Price' : `+$${formatPrice(interiorStyles[style].priceAdjustment)}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-info">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5 className="mb-1">Selected: {interiorStyles[selectedInteriorStyle].name}</h5>
                                            <p className="mb-0">
                                                {selectedInteriorStyle === 'classic' 
                                                    ? 'Included in base price' 
                                                    : `Additional cost: +$${formatPrice(interiorStyles[selectedInteriorStyle].priceAdjustment)}`
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">New Total: ${formatPrice(adjustedPrice)}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <button 
                                className="btn btn-outline-secondary"
                                onClick={() => router.back()}
                            >
                                Back to Colors
                            </button>
                            <button 
                                className="btn btn-primary"
                                onClick={handleInteriorStyleConfirm}
                            >
                                Confirm Selection & Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Add custom styles for the slider */}
            <style jsx global>{`
                .swiper {
                    width: 100%;
                    padding-bottom: 50px;
                }
                
                .swiper-slide {
                    height: auto;
                    padding: 10px;
                }
                
                .swiper-button-next,
                .swiper-button-prev {
                    color: #0d6efd;
                }
                
                .swiper-pagination-bullet-active {
                    background: #0d6efd;
                }
            `}</style>
        </>
    );
};

export default InteriorDesign;