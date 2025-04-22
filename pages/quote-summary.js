import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';
import img1 from '../public/images/color/1.jpg';
import img2 from '../public/images/color/2.png';
import img3 from '../public/images/color/3.png';
import img4 from '../public/images/color/4.png';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
// Fix the import path for modules
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const QuoteSummary = () => {
    const router = useRouter();
    const [quoteData, setQuoteData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedColorScheme, setSelectedColorScheme] = useState('driftwood');
    const [adjustedPrice, setAdjustedPrice] = useState(0);
    const [colorSelectionComplete, setColorSelectionComplete] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    // Updated color scheme options with the requested themes and price adjustments
    const colorSchemes = {
        driftwood: {
            name: 'Driftwood',
            description: 'Warm sandy tones with natural wood accents',
            image: img1,
            colors: ['#E6D2B5', '#C7B299', '#A89076', '#7D6C55', '#4E4130'],
            priceAdjustment: 0 // Base price, no adjustment
        },
        twilight: {
            name: 'Twilight',
            description: 'Deep blues and purples with silver highlights',
            image: img2,
            colors: ['#1A237E', '#303F9F', '#5C6BC0', '#9FA8DA', '#C5CAE9'],
            priceAdjustment: 5000 // Premium option
        },
        breeze: {
            name: 'Breeze',
            description: 'Light blues and soft greens for a fresh coastal feel',
            image: img3,
            colors: ['#B3E5FC', '#81D4FA', '#4FC3F7', '#E0F7FA', '#B2EBF2'],
            priceAdjustment: 3500 // Mid-range option
        },
        dusk: {
            name: 'Dusk',
            description: 'Muted oranges and reds with warm undertones',
            image: img4,
            colors: ['#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00'],
            priceAdjustment: 4200 // Higher-end option
        }
    };

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
            totalPrice
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
            totalPrice: totalPrice || "0"
        });
        
        setLoading(false);
    }, [router.isReady, router.query]);

    // Calculate adjusted price when quote data or color scheme changes
    useEffect(() => {
        if (quoteData.totalPrice) {
            const basePrice = parseInt(quoteData.totalPrice.replace(/,/g, ''), 10) || 0;
            const adjustment = colorSchemes[selectedColorScheme]?.priceAdjustment || 0;
            setAdjustedPrice(basePrice + adjustment);
        }
    }, [quoteData.totalPrice, selectedColorScheme]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    // Generate a unique quote reference number
    const quoteRef = `MH-${Date.now().toString().slice(-6)}`;
    
    // Get current date in readable format
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Handle color scheme selection
    const handleColorSchemeChange = (scheme) => {
        setSelectedColorScheme(scheme);
    };

    // Handle color selection confirmation
    const handleColorSelectionConfirm = () => {
        setColorSelectionComplete(true);
    };

    // Handle contact sales team button click
    const handleContactSalesTeam = () => {
        // Create an object with all the quote data and selected options
        const contactData = {
            // House details
            title: quoteData.title,
            bedrooms: quoteData.bedrooms,
            bathrooms: quoteData.bathrooms,
            garage: quoteData.garage,
            lotWidth: quoteData.lotWidth,
            depth: quoteData.depth,
            size: quoteData.size,
            floorPlan: quoteData.floorPlan,
            preview: quoteData.preview,
            selectedRegion: quoteData.selectedRegion,
            
            // Price details
            basePrice: quoteData.totalPrice,
            selectedColorScheme: colorSchemes[selectedColorScheme].name,
            colorSchemePrice: colorSchemes[selectedColorScheme].priceAdjustment,
            totalPrice: adjustedPrice,
            
            // Quote reference
            quoteRef: quoteRef,
            quoteDate: currentDate
        };
        
        // Convert to query string and navigate to contact page
        const queryString = new URLSearchParams(contactData).toString();
        router.push(`/contact-sales?${queryString}`);
    };

    if (loading) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Quote Summary'} pagesub={'Summary'} />
                <div className="container my-5 text-center">
                    <h3>Loading quote data...</h3>
                </div>
            </>
        );
    }

    // Color scheme selection screen
    if (!colorSelectionComplete) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Select Your Color Scheme'} pagesub={'Customization'} />
                
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
                                <div className="progress-step active">
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
                
                <div className="container my-5">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mb-0">Customize Your Home</h3>
                                <div className="text-end">
                                    <div>Quote #: {quoteRef}</div>
                                    <div>Date: {currentDate}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h4>{quoteData.title}</h4>
                                    <p className="text-muted mb-0">Region: {quoteData.selectedRegion}</p>
                                </div>
                                <div className="col-md-6 text-md-end">
                                    <h2 className="text-primary mb-0">${formatPrice(parseInt(quoteData.totalPrice) || 0)}</h2>
                                    <p className="text-muted">Base Price</p>
                                </div>
                            </div>
                            
                            <hr />
                            
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="text-center mb-4">Choose Your Color Scheme</h5>
                                    <p className="text-center text-muted mb-4">Select a color palette that matches your style and personality. Your choice will influence the interior and exterior finishes of your new home.</p>
                                    
                                    {/* Color Scheme Slider */}
                                    <div className="color-scheme-slider mb-5">
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
                                                const schemeKeys = Object.keys(colorSchemes);
                                                if (schemeKeys[swiper.activeIndex]) {
                                                    handleColorSchemeChange(schemeKeys[swiper.activeIndex]);
                                                }
                                            }}
                                            className="mySwiper"
                                        >
                                            {Object.keys(colorSchemes).map((scheme, index) => (
                                                <SwiperSlide key={scheme}>
                                                    <div 
                                                        className={`card h-100 ${selectedColorScheme === scheme ? 'border-primary border-3' : ''}`}
                                                        onClick={() => handleColorSchemeChange(scheme)}
                                                        style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                    >
                                                        <div className="position-relative" style={{ height: '220px' }}>
                                                            <Image
                                                                src={colorSchemes[scheme].image}
                                                                alt={colorSchemes[scheme].name}
                                                                layout="fill"
                                                                objectFit="cover"
                                                                className="card-img-top"
                                                            />
                                                            {selectedColorScheme === scheme && (
                                                                <div className="position-absolute top-0 end-0 p-2">
                                                                    <span className="badge bg-primary">Selected</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{colorSchemes[scheme].name}</h5>
                                                            <p className="card-text">{colorSchemes[scheme].description}</p>
                                                            <div className="d-flex justify-content-between mt-3">
                                                                {colorSchemes[scheme].colors.map((color, index) => (
                                                                    <div 
                                                                        key={index} 
                                                                        style={{
                                                                            backgroundColor: color,
                                                                            width: '25px',
                                                                            height: '25px',
                                                                            borderRadius: '50%',
                                                                            border: '1px solid #ddd'
                                                                        }}
                                                                    ></div>
                                                                ))}
                                                            </div>
                                                            <div className="mt-3">
                                                                <span className={`badge ${scheme === 'driftwood' ? 'bg-success' : 'bg-secondary'} p-2`}>
                                                                    {scheme === 'driftwood' ? 'Included in Base Price' : `+$${formatPrice(colorSchemes[scheme].priceAdjustment)}`}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    
                                    {/* Original grid view (can be kept as an alternative or removed) */}
                                    <div className="row justify-content-center d-none">
                                        {Object.keys(colorSchemes).map((scheme) => (
                                            <div className="col-md-5 col-lg-3 mb-4" key={scheme}>
                                                <div 
                                                    className={`card h-100 ${selectedColorScheme === scheme ? 'border-primary border-3' : ''}`}
                                                    onClick={() => handleColorSchemeChange(scheme)}
                                                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                                >
                                                    <div className="position-relative" style={{ height: '180px' }}>
                                                        <Image
                                                            src={colorSchemes[scheme].image}
                                                            alt={colorSchemes[scheme].name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="card-img-top"
                                                        />
                                                        {selectedColorScheme === scheme && (
                                                            <div className="position-absolute top-0 end-0 p-2">
                                                                <span className="badge bg-primary">Selected</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{colorSchemes[scheme].name}</h5>
                                                        <p className="card-text">{colorSchemes[scheme].description}</p>
                                                        <div className="d-flex justify-content-between mt-3">
                                                            {colorSchemes[scheme].colors.map((color, index) => (
                                                                <div 
                                                                    key={index} 
                                                                    style={{
                                                                        backgroundColor: color,
                                                                        width: '25px',
                                                                        height: '25px',
                                                                        borderRadius: '50%',
                                                                        border: '1px solid #ddd'
                                                                    }}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                        <div className="mt-3">
                                                            <span className={`badge ${scheme === 'driftwood' ? 'bg-success' : 'bg-secondary'} p-2`}>
                                                                {scheme === 'driftwood' ? 'Included in Base Price' : `+$${formatPrice(colorSchemes[scheme].priceAdjustment)}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="alert alert-info">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="mb-1">Selected: {colorSchemes[selectedColorScheme].name}</h5>
                                                <p className="mb-0">
                                                    {selectedColorScheme === 'driftwood' 
                                                        ? 'Included in base price' 
                                                        : `Additional cost: +$${formatPrice(colorSchemes[selectedColorScheme].priceAdjustment)}`
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
                                    Back
                                </button>
                                <button 
                                    className="btn btn-primary"
                                    onClick={handleColorSelectionConfirm}
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
    }

    // Main quote summary screen (shown after color selection)
    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Quote Summary'} pagesub={'Summary'} />
            
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
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">UPGRADES</div>
                            </div>
                            <div className="progress-step active">
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
                            <h3 className="mb-0">Quote Summary</h3>
                            <div className="text-end">
                                <div>Quote #: {quoteRef}</div>
                                <div>Date: {currentDate}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h4>{quoteData.title}</h4>
                                <p className="text-muted mb-0">Region: {quoteData.selectedRegion}</p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <h2 className="text-primary mb-0">${formatPrice(adjustedPrice)}</h2>
                                <p className="text-muted">Estimated Total</p>
                            </div>
                        </div>
                        
                        <hr />
                        
                        <div className="row">
                            <div className="col-md-6">
                                <h5>House Specifications</h5>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Bedrooms</th>
                                            <td>{quoteData.bedrooms}</td>
                                        </tr>
                                        <tr>
                                            <th>Bathrooms</th>
                                            <td>{quoteData.bathrooms}</td>
                                        </tr>
                                        <tr>
                                            <th>Garage</th>
                                            <td>{quoteData.garage}</td>
                                        </tr>
                                        <tr>
                                            <th>Lot Width</th>
                                            <td>{quoteData.lotWidth}</td>
                                        </tr>
                                        <tr>
                                            <th>Depth</th>
                                            <td>{quoteData.depth}</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>{quoteData.size} m²</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="col-md-6">
                                <h5>Price Breakdown</h5>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Base Construction</th>
                                            <td>${formatPrice(Math.round(parseFloat(quoteData.size) * 1500))}</td>
                                        </tr>
                                        <tr>
                                            <th>Region Factor</th>
                                            <td>+${formatPrice(Math.round(parseFloat(quoteData.size) * 1500 * 0.1))}</td>
                                        </tr>
                                        <tr>
                                            <th>Base House Price</th>
                                            <td>${formatPrice(Math.round(parseFloat(quoteData.size) * 1500))}</td>
                                        </tr>
                                        <tr>
                                            <th>Color Scheme ({colorSchemes[selectedColorScheme].name})</th>
                                            <td>+${formatPrice(colorSchemes[selectedColorScheme].priceAdjustment)}</td>
                                        </tr>
                                        <tr className="table-primary">
                                            <th>Total Estimate</th>
                                            <td><strong>${formatPrice(adjustedPrice)}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {/* Selected Color Scheme Display */}
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Your Selected Color Scheme</h5>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className="position-relative h-100">
                                                <Image
                                                    src={colorSchemes[selectedColorScheme].image}
                                                    alt={colorSchemes[selectedColorScheme].name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-start"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{colorSchemes[selectedColorScheme].name}</h5>
                                                <p className="card-text">{colorSchemes[selectedColorScheme].description}</p>
                                                <div className="d-flex mb-3">
                                                    {colorSchemes[selectedColorScheme].colors.map((color, index) => (
                                                        <div 
                                                            key={index} 
                                                            style={{
                                                                backgroundColor: color,
                                                                width: '30px',
                                                                height: '30px',
                                                                borderRadius: '50%',
                                                                border: '1px solid #ddd',
                                                                marginRight: '10px'
                                                            }}
                                                        ></div>
                                                    ))}
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        {selectedColorScheme === 'driftwood' 
                                                            ? 'Included in base price' 
                                                            : `Additional cost: +$${formatPrice(colorSchemes[selectedColorScheme].priceAdjustment)}`
                                                        }
                                                    </small>
                                                </p>
                                                <button 
                                                    className="btn btn-outline-primary btn-sm"
                                                    onClick={() => setColorSelectionComplete(false)}
                                                >
                                                    Change Color Scheme
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-info">
                                    <h5>Next Steps</h5>
                                    <p>Thank you for your interest in building with Mimosa Homes. A representative will contact you within 24 hours to discuss your quote and answer any questions you may have.</p>
                                    <p>Selected Color Scheme: <strong>{colorSchemes[selectedColorScheme].name}</strong> (+${formatPrice(colorSchemes[selectedColorScheme].priceAdjustment)})</p>
                                    <p className="mb-0">Quote Reference: <strong>{quoteRef}</strong> (Please keep this for your records)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-footer">
                        <div className="d-flex justify-content-between">
                            <Link href="/home2" className="btn btn-outline-secondary">
                                Return to Home
                            </Link>
                            <div>
                                <button className="btn btn-outline-primary me-2" onClick={() => window.print()}>
                                    Print Quote
                                </button>
                                <button className="btn btn-success" onClick={handleContactSalesTeam}>
                                    Contact Sales Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuoteSummary;