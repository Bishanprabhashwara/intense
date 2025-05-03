import React, { useState } from 'react';
import Navbar2 from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Footer from '../components/footer';
import Scrollbar from '../components/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/homes/p1.jpg';
import img2 from '../public/images/homes/main.jpg';
import img3 from '../public/images/homes/p3.jpg';
import img4 from '../public/images/homes/p4.jpg';

const Properties = () => {
    const [filter, setFilter] = useState('all');
    
    const properties = [
        {
            id: 1,
            title: 'Modern Family Home',
            category: 'residential',
            price: '$724,000',
            bedrooms: 4,
            bathrooms: 2,
            area: '2,500 sq ft',
            location: '18 Midanbury Road, Donnybrook, Vic 3064',
            image: img1, // Fixed: use the imported image directly, not in an object
            featured: true
        },
        {
            id: 2,
            title: 'Luxury Apartment',
            category: 'residential',
            price: '$790,000',
            bedrooms: 4,
            bathrooms: 2,
            area: '1,200 sq ft',
            location: '54 Galveston Avenue Fraser Rise, VIC 3336',
            image: img2, // Updated path to match folder structure
            featured: false
        },
        {
            id: 3,
            title: 'Downtown Office Space',
            category: 'residential',
            price: '$780,000',
            bedrooms: 4,
            bathrooms: 3,
            area: '3,000 sq ft',
            location: '8 Sadie Avenue Thornhill Park, VIC 3335',
            image: img3, // Updated path
            featured: false
        },
        {
            id: 4,
            title: 'Beachfront Villa',
            category: 'residential',
            price: '$790,000',
            bedrooms: 4,
            bathrooms: 2,
            area: '4,200 sq ft',
            location: '18 Midanbury Road, Donnybrook, Vic 3064',
            image: img4, // Updated path
            featured: true
        },
    ];

    const filteredProperties = filter === 'all' 
        ? properties 
        : properties.filter(property => property.category === filter);

    return (
        <div>
            <Navbar2 /> {/* Changed from Navbar to Navbar2 to match other pages */}
            <PageTitle pageTitle={'Our Properties'} pagesub={'Properties'} />
            
            <section className="wpo-properties-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Our Properties</span>
                                <h2>Browse Our Featured Properties</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="property-filters text-center">
                        <ul className="list-inline">
                            <li className={`list-inline-item ${filter === 'all' ? 'active' : ''}`}>
                                <button onClick={() => setFilter('all')}>All Properties</button>
                            </li>
                            <li className={`list-inline-item ${filter === 'residential' ? 'active' : ''}`}>
                                <button onClick={() => setFilter('residential')}>Residential</button>
                            </li>
                            <li className={`list-inline-item ${filter === 'apartment' ? 'active' : ''}`}>
                                <button onClick={() => setFilter('apartment')}>Apartments</button>
                            </li>
                            <li className={`list-inline-item ${filter === 'commercial' ? 'active' : ''}`}>
                                <button onClick={() => setFilter('commercial')}>Commercial</button>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="row mt-5">
                    {filteredProperties.map(property => (
                        <div className="col-lg-4 col-md-6 col-12 mb-4" key={property.id}>
                            <Link href={`/property/${property.id}`} passHref legacyBehavior>
                                <a className="property-card-link">
                                    <div className="property-card">
                                        <div className="property-img position-relative">
                                            {typeof property.image === 'string' ? (
                                                <img 
                                                    src={property.image} 
                                                    alt={property.title}
                                                    className="img-fluid"
                                                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                                />
                                            ) : (
                                                <Image 
                                                    src={property.image} 
                                                    alt={property.title}
                                                    width={400}
                                                    height={300}
                                                    className="img-fluid"
                                                />
                                            )}
                                            {property.featured && (
                                                <span className="featured-badge">Featured</span>
                                            )}
                                        </div>
                                        <div className="property-info p-4">
                                            <h3>{property.title}</h3>
                                            <p className="location"><i className="fi flaticon-placeholder"></i> {property.location}</p>
                                            <div className="property-features d-flex justify-content-between mt-3">
                                                <span>{property.bedrooms} Beds</span>
                                                <span>{property.bathrooms} Baths</span>
                                                <span>{property.area}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
            
            <style jsx>{`
                .property-filters {
                    margin: 30px 0;
                }
                
                .property-filters ul li {
                    margin: 0 5px;
                }
                
                .property-filters ul li button {
                    background: none;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-weight: 600;
                }
                
                .property-filters ul li.active button,
                .property-filters ul li button:hover {
                    background: #f47920;
                    color: white;
                }
                
                .property-card {
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 0 15px rgba(0,0,0,0.1);
                    transition: all 0.3s;
                }
                
                .property-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                }
                
                .property-img {
                    height: 250px;
                    overflow: hidden;
                }
                
                .property-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.5s;
                }
                
                .property-card:hover .property-img img {
                    transform: scale(1.1);
                }
                
                .featured-badge {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: #f47920;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 3px;
                    font-size: 12px;
                    font-weight: 600;
                }
                
                .property-price {
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                    background: rgba(0,0,0,0.7);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 3px;
                    font-weight: 600;
                }
                
                .property-info h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                
                .property-info h3 a {
                    color: #333;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                
                .property-info h3 a:hover {
                    color: #f47920;
                }
                
                .location {
                    color: #777;
                    font-size: 14px;
                }
                
                .property-features {
                    border-top: 1px solid #eee;
                    padding-top: 15px;
                    font-size: 14px;
                    color: #555;
                }
            `}</style>
        </div>
    );
};

export default Properties;