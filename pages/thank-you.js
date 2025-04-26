import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';
import Image from 'next/image';

const ThankYou = () => {
    const router = useRouter();
    const [quoteData, setQuoteData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for router to be ready
        if (!router.isReady) return;
        
        // Extract all query parameters
        setQuoteData(router.query);
        setLoading(false);
    }, [router.isReady, router.query]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    if (loading) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Thank You'} pagesub={'Confirmation'} />
                <div className="container my-5 text-center">
                    <h3>Loading your information...</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Thank You For Your Submission'} pagesub={'Confirmation'} />
            
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 mb-5">
                            <div className="card-body p-5">
                                <div className="text-center mb-5">
                                    <div className="display-1 text-success mb-3">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <h2 className="mb-3">Thank You for Your Submission!</h2>
                                    <p className="lead">
                                        Your quote inquiry has been received. A member of our sales team will contact you shortly.
                                    </p>
                                    <div className="alert alert-info">
                                        <strong>Quote Reference:</strong> {quoteData.quoteRef || 'N/A'}
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-header bg-primary text-white">
                                                <h5 className="mb-0">Your Contact Information</h5>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Name:</strong>
                                                        <span>{quoteData.firstName} {quoteData.lastName}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Email:</strong>
                                                        <span>{quoteData.email}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Phone:</strong>
                                                        <span>{quoteData.phone}</span>
                                                    </li>
                                                    {quoteData.address && (
                                                        <li className="list-group-item d-flex justify-content-between">
                                                            <strong>Address:</strong>
                                                            <span>{quoteData.address}</span>
                                                        </li>
                                                    )}
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Preferred Contact:</strong>
                                                        <span>{quoteData.preferredContact}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-header bg-primary text-white">
                                                <h5 className="mb-0">House Details</h5>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Model:</strong>
                                                        <span>{quoteData.title}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Bedrooms:</strong>
                                                        <span>{quoteData.bedrooms}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Bathrooms:</strong>
                                                        <span>{quoteData.bathrooms}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Garage:</strong>
                                                        <span>{quoteData.garage}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Size:</strong>
                                                        <span>{quoteData.size} m²</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Region:</strong>
                                                        <span>{quoteData.selectedRegion}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-header bg-primary text-white">
                                                <h5 className="mb-0">Selected Options</h5>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Color Scheme:</strong>
                                                        <span>{quoteData.selectedColorScheme}</span>
                                                    </li>
                                                    {quoteData.selectedInteriorDesign && (
                                                        <li className="list-group-item d-flex justify-content-between">
                                                            <strong>Interior Design:</strong>
                                                            <span>{quoteData.selectedInteriorDesign}</span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-header bg-primary text-white">
                                                <h5 className="mb-0">Price Details</h5>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <strong>Base Price:</strong>
                                                        <span>${formatPrice(quoteData.basePrice)}</span>
                                                    </li>
                                                    {quoteData.colorSchemePrice && parseInt(quoteData.colorSchemePrice) > 0 && (
                                                        <li className="list-group-item d-flex justify-content-between">
                                                            <strong>Color Scheme:</strong>
                                                            <span>+${formatPrice(quoteData.colorSchemePrice)}</span>
                                                        </li>
                                                    )}
                                                    {quoteData.interiorDesignPrice && parseInt(quoteData.interiorDesignPrice) > 0 && (
                                                        <li className="list-group-item d-flex justify-content-between">
                                                            <strong>Interior Design:</strong>
                                                            <span>+${formatPrice(quoteData.interiorDesignPrice)}</span>
                                                        </li>
                                                    )}
                                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                                        <strong>Total Price:</strong>
                                                        <span className="text-primary fw-bold">${formatPrice(quoteData.totalPrice)}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {quoteData.message && (
                                    <div className="card mb-4">
                                        <div className="card-header bg-primary text-white">
                                            <h5 className="mb-0">Your Message</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>{quoteData.message}</p>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="text-center mt-4">
                                    <p>We have sent a confirmation email to <strong>{quoteData.email}</strong>.</p>
                                    <div className="d-flex justify-content-center gap-3 mt-4">
                                        <Link href="/" className="btn btn-primary">
                                            Return to Home
                                        </Link>
                                        <button 
                                            className="btn btn-outline-secondary"
                                            onClick={() => window.print()}
                                        >
                                            Print Quote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Add print styles */}
            <style jsx global>{`
                @media print {
                    .wpo-header-style-3,
                    .wpo-page-title,
                    .btn,
                    footer {
                        display: none !important;
                    }
                    
                    .card {
                        border: 1px solid #ddd !important;
                        box-shadow: none !important;
                    }
                    
                    .card-header {
                        background-color: #f8f9fa !important;
                        color: #000 !important;
                        border-bottom: 1px solid #ddd !important;
                    }
                    
                    body {
                        font-size: 12pt;
                    }
                    
                    .container {
                        max-width: 100% !important;
                        width: 100% !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ThankYou;