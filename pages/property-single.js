import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar2 from '../components/Navbar2';
import PageTitle from '../components/pagetitle';
import Footer from '../components/footer';
import Scrollbar from '../components/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/homes/p1.jpg';
import img2 from '../public/images/homes/main.jpg';
import img3 from '../public/images/homes/p3.jpg';
import img4 from '../public/images/homes/p4.jpg';

const PropertySingle = () => {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sample property data (in a real app, this would come from an API or database)
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
            image: img1,
            featured: true,
            description: 'This stunning modern family home offers spacious living areas, a gourmet kitchen, and a beautiful backyard perfect for entertaining. Located in a family-friendly neighborhood with easy access to schools, parks, and shopping centers.',
            features: [
                'Open floor plan',
                'Gourmet kitchen with island',
                'Master suite with walk-in closet',
                'Covered patio',
                'Two-car garage',
                'Energy-efficient appliances',
                'Smart home technology',
                'Landscaped garden'
            ],
            yearBuilt: 2022,
            garage: 2,
            lotSize: '450 sq m'
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
            image: img2,
            featured: false,
            description: 'Experience luxury living in this modern apartment featuring high-end finishes, floor-to-ceiling windows, and breathtaking city views. The building offers premium amenities including a fitness center, rooftop pool, and 24-hour concierge service.',
            features: [
                'Floor-to-ceiling windows',
                'Hardwood floors',
                'Stainless steel appliances',
                'Granite countertops',
                'In-unit washer and dryer',
                'Central air conditioning',
                'Private balcony',
                'Building security system'
            ],
            yearBuilt: 2021,
            garage: 1,
            lotSize: 'N/A'
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
            image: img3,
            featured: false,
            description: 'Prime downtown office space ideal for businesses looking for a central location. Features modern design, flexible layout options, and state-of-the-art technology infrastructure. Close to public transportation, restaurants, and other amenities.',
            features: [
                'Open concept design',
                'High ceilings',
                'Natural lighting',
                'Conference rooms',
                'Kitchen area',
                'Reception area',
                'High-speed internet ready',
                'Secure access'
            ],
            yearBuilt: 2020,
            garage: 2,
            lotSize: '500 sq m'
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
            image: img4,
            featured: true,
            description: 'Luxurious beachfront villa with direct access to pristine sandy beaches. Enjoy breathtaking ocean views from multiple terraces, a private infinity pool, and beautifully landscaped gardens. Perfect for those seeking a premium coastal lifestyle.',
            features: [
                'Oceanfront location',
                'Infinity pool',
                'Multiple terraces',
                'Gourmet kitchen',
                'Home theater',
                'Wine cellar',
                'Outdoor kitchen and dining area',
                'Private beach access'
            ],
            yearBuilt: 2019,
            garage: 3,
            lotSize: '800 sq m'
        },
    ];

    useEffect(() => {
        if (id) {
            const propertyData = properties.find(p => p.id === parseInt(id));
            setProperty(propertyData);
            setLoading(false);
        }
    }, [id]);

    if (loading || !property) {
        return (
            <div>
                <Navbar2 />
                <PageTitle pageTitle={'Property Details'} pagesub={'Loading...'} />
                <div className="container my-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Loading property details...</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar2 />
            <PageTitle pageTitle={property.title} pagesub={'Property Details'} />
            
            <section className="property-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="property-single-content">
                                <div className="property-single-img mb-4">
                                    <div className="position-relative" style={{ height: '500px' }}>
                                        {typeof property.image === 'string' ? (
                                            <img 
                                                src={property.image} 
                                                alt={property.title}
                                                className="img-fluid rounded"
                                                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                            />
                                        ) : (
                                            <Image 
                                                src={property.image} 
                                                alt={property.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded"
                                            />
                                        )}
                                        {property.featured && (
                                            <span className="featured-badge">Featured</span>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="property-single-info">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="mb-0">{property.title}</h2>
                                        <h3 className="text-primary mb-0">{property.price}</h3>
                                    </div>
                                    
                                    <p className="location mb-4">
                                        <i className="fi flaticon-placeholder"></i> {property.location}
                                    </p>
                                    
                                    <div className="property-features d-flex justify-content-between mb-4 p-3 bg-light rounded">
                                        <div className="feature text-center">
                                            <i className="fi flaticon-bed d-block mb-2 fs-4"></i>
                                            <span className="d-block text-muted">Bedrooms</span>
                                            <strong>{property.bedrooms}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            <i className="fi flaticon-bathroom d-block mb-2 fs-4"></i>
                                            <span className="d-block text-muted">Bathrooms</span>
                                            <strong>{property.bathrooms}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            <i className="fi flaticon-square d-block mb-2 fs-4"></i>
                                            <span className="d-block text-muted">Area</span>
                                            <strong>{property.area}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            <i className="fi flaticon-garage d-block mb-2 fs-4"></i>
                                            <span className="d-block text-muted">Garage</span>
                                            <strong>{property.garage}</strong>
                                        </div>
                                    </div>
                                    
                                    <div className="property-description mb-4">
                                        <h4 className="mb-3">Description</h4>
                                        <p>{property.description}</p>
                                    </div>
                                    
                                    <div className="property-features-list mb-4">
                                        <h4 className="mb-3">Features</h4>
                                        <div className="row">
                                            {property.features.map((feature, index) => (
                                                <div className="col-md-6 mb-2" key={index}>
                                                    <div className="d-flex align-items-center">
                                                        <i className="fas fa-check-circle text-primary me-2"></i>
                                                        <span>{feature}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="property-sidebar">
                                <div className="card mb-4">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">Property Details</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Property ID:</span>
                                                <strong>#{property.id}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Property Type:</span>
                                                <strong>{property.category.charAt(0).toUpperCase() + property.category.slice(1)}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Property Status:</span>
                                                <strong>For Sale</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Property Price:</span>
                                                <strong>{property.price}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Bedrooms:</span>
                                                <strong>{property.bedrooms}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Bathrooms:</span>
                                                <strong>{property.bathrooms}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Area:</span>
                                                <strong>{property.area}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Lot Size:</span>
                                                <strong>{property.lotSize}</strong>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Year Built:</span>
                                                <strong>{property.yearBuilt}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="card mb-4">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">Contact Agent</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Your Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea className="form-control" id="message" rows="4" placeholder="I'm interested in this property"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">Schedule a Tour</h5>
                                    </div>
                                    <div className="card-body">
                                        <Link href="/contact-sales" className="btn btn-outline-primary w-100">
                                            Book a Viewing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
            
            <style jsx>{`
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
                
                .location {
                    color: #777;
                    font-size: 16px;
                }
                
                .property-features {
                    border: 1px solid #eee;
                }
                
                .property-features .feature i {
                    color: #f47920;
                }
            `}</style>
        </div>
    );
};

export default PropertySingle;