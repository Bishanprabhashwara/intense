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

const QuoteSummary = () => {
    const router = useRouter();
    const [quoteData, setQuoteData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedColorScheme, setSelectedColorScheme] = useState('driftwood');
    const [adjustedPrice, setAdjustedPrice] = useState(0);

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

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Quote Summary'} pagesub={'Summary'} />
            
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
                                            <th>Bedrooms Premium</th>
                                            <td>+5% per bedroom</td>
                                        </tr>
                                        <tr>
                                            <th>Bathrooms Premium</th>
                                            <td>+7% per bathroom</td>
                                        </tr>
                                        <tr>
                                            <th>Garage Premium</th>
                                            <td>+3% per garage space</td>
                                        </tr>
                                        <tr>
                                            <th>Region Factor</th>
                                            <td>{quoteData.selectedRegion}</td>
                                        </tr>
                                        <tr>
                                            <th>Base House Price</th>
                                            <td>${formatPrice(quoteData.totalPrice)}</td>
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
                        
                        {/* Color Scheme Selection */}
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Select Your Color Scheme</h5>
                                <p className="text-muted">Choose a color palette that matches your style</p>
                                
                                <div className="row">
                                    {Object.keys(colorSchemes).map((scheme) => (
                                        <div className="col-md-3 mb-3" key={scheme}>
                                            <div 
                                                className={`card h-100 ${selectedColorScheme === scheme ? 'border-primary' : ''}`}
                                                onClick={() => handleColorSchemeChange(scheme)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="position-relative" style={{ height: '150px' }}>
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
                                                    <h6 className="card-title">{colorSchemes[scheme].name}</h6>
                                                    <p className="card-text small">{colorSchemes[scheme].description}</p>
                                                    <div className="d-flex justify-content-between mt-2">
                                                        {colorSchemes[scheme].colors.map((color, index) => (
                                                            <div 
                                                                key={index} 
                                                                style={{
                                                                    backgroundColor: color,
                                                                    width: '20px',
                                                                    height: '20px',
                                                                    borderRadius: '50%',
                                                                    border: '1px solid #ddd'
                                                                }}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-2 text-end">
                                                        <span className={`badge ${scheme === 'driftwood' ? 'bg-success' : 'bg-secondary'}`}>
                                                            {scheme === 'driftwood' ? 'Included' : `+$${formatPrice(colorSchemes[scheme].priceAdjustment)}`}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* {quoteData.floorPlan && (
                            <div className="row mt-4">
                                <div className="col-12">
                                    <h5>Floor Plan</h5>
                                    <div className="text-center">
                                        <Image
                                            src={quoteData.floorPlan.startsWith('http') ? quoteData.floorPlan : `/${quoteData.floorPlan}`}
                                            alt="Floor Plan"
                                            width={500}
                                            height={350}
                                            className="img-fluid border"
                                        />
                                    </div>
                                </div>
                            </div>
                        )} */}
                        
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