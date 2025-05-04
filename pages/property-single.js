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
import img5 from '../public/images/homes/modernhome/image1.jpg';
import img6 from '../public/images/homes/modernhome/image2.jpg';
import img7 from '../public/images/homes/modernhome/image.jpg';
import img8 from '../public/images/homes/modernhome/image7.jpg';
import img9 from '../public/images/homes/modernhome/image4.jpg';
import img10 from '../public/images/homes/modernhome/image5.jpg';
import img11 from '../public/images/homes/modernhome/image6.jpg';
import img12 from '../public/images/homes/modernhome/image8.jpg';
import img13 from '../public/images/homes/modernhome/image9.jpg';
import img14 from '../public/images/homes/modernhome/image10.jpg';
import img15 from '../public/images/homes/modernhome/image11.jpg';
import img16 from '../public/images/homes/galveston/image4.jpg';
import img17 from '../public/images/homes/galveston/image5.jpg';
import img18 from '../public/images/homes/galveston/image6.jpg';
import img19 from '../public/images/homes/galveston/image7.jpg';
import img20 from '../public/images/homes/galveston/image8.jpg';
import img21 from '../public/images/homes/galveston/image3.jpg';
import img22 from '../public/images/homes/galveston/image10.jpg';
import img23 from '../public/images/homes/SadieAvenue/image11.jpg';
import img24 from '../public/images/homes/SadieAvenue/image31.jpg';
import img25 from '../public/images/homes/SadieAvenue/image8.jpg';
import img26 from '../public/images/homes/SadieAvenue/image15.jpg';
import img27 from '../public/images/homes/SadieAvenue/image5.jpg';
import img28 from '../public/images/homes/SadieAvenue/image9.jpg';
import img29 from '../public/images/homes/SadieAvenue/image13.jpg';




const PropertySingle = () => {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('all'); // Add this line to define activeTab state

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
            lotSize: '450 sq m',
            roomImages: {
                all: [img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15],
                livingRoom: [img8,img9,img10,img11],
                bedroom: [img12,img13,img14,img15],
                kitchen: [img5,img6,img7]
            }
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
            description: '54 Galveston Avenue, Fraser Rise, Vic 3336 has a land size of 448 m². It is a house with 4 bedrooms, 2 bathrooms, and 2 parking spaces. The house is built on a 448 m² land. The house has a total of 10 rooms, including 4 bedrooms, 2 bathrooms, and 2 parking spaces.',
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
            lotSize: 'N/A',
            roomImages: {
                all: [img16,img17,img18,img19,img20,img21,img22],
                livingRoom: [img20,img21],
                bedroom: [img22],
                kitchen: [img16,img17,img18,img19]
            }
        },
        {
            id: 3,
            title: 'Sadie Avenue',
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
            lotSize: '500 sq m',
            roomImages: {
                all: [img23,img24,img25,img26,img27,img28,img29],
                livingRoom: [img24,img25,img26],
                bedroom: [img27,img28,img29],
                kitchen: [img23]
            }
        },
        {
            id: 4,
            title: 'Comfort & Convenience',
            category: 'residential',
            price: '$790,000',
            bedrooms: 4,
            bathrooms: 2,
            area: '4,200 sq ft',
            location: '18 Midanbury Road, Donnybrook, Vic 3064',
            image: img4,
            featured: true,
            description: 'Welcome to this exquisite 4-bedroom contemporary home, where high-end finishes and thoughtful design come together to offer a luxurious yet low-maintenance lifestyle. With an open floor plan and premium inclusions throughout, this stunning residence is built for modern living without compromise.',
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
            lotSize: '800 sq m',
            roomImages: {
                all: [img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15],
                livingRoom: [img8,img9,img10,img11],
                bedroom: [img12,img13,img14,img15],
                kitchen: [img5,img6,img7]
            }
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
                                
                                {/* Property Gallery Section */}
                                <div className="property-gallery mb-5">
                                    <h4 className="mb-3">Property Gallery</h4>
                                    
                                    {/* Gallery Navigation Tabs */}
                                    <ul className="nav nav-pills mb-4" id="propertyGalleryTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('all')}
                                            >
                                                All Photos
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className={`nav-link ${activeTab === 'livingRoom' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('livingRoom')}
                                            >
                                                Living Room
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className={`nav-link ${activeTab === 'bedroom' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('bedroom')}
                                            >
                                                Bedroom
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button 
                                                className={`nav-link ${activeTab === 'kitchen' ? 'active' : ''}`}
                                                onClick={() => setActiveTab('kitchen')}
                                            >
                                                Kitchen
                                            </button>
                                        </li>
                                    </ul>
                                    
                                    {/* Gallery Images */}
                                    <div className="tab-content" id="propertyGalleryTabContent">
                                        <div className="tab-pane fade show active">
                                            <div className="row g-3">
                                                {property.roomImages && property.roomImages[activeTab] && 
                                                 property.roomImages[activeTab].map((img, index) => (
                                                    <div className="col-md-6 col-lg-4" key={index}>
                                                        <div className="gallery-item">
                                                            <div className="position-relative" style={{ height: '200px' }}>
                                                                <Image 
                                                                    src={img} 
                                                                    alt={`${property.title} - ${activeTab} ${index + 1}`}
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                            <div className="gallery-overlay">
                                                                <div className="gallery-icon">
                                                                    <i className="fas fa-search-plus"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="property-single-info">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="mb-0">{property.title}</h2>
                                        {/* <h3 className="text-primary mb-0">{property.price}</h3> */}
                                    </div>
                                    
                                    <p className="location mb-4">
                                        <i className="fi flaticon-placeholder"></i> {property.location}
                                    </p>
                                    
                                    <div className="property-features d-flex justify-content-between mb-4 p-3 bg-light rounded">
                                        <div className="feature text-center">
                                            {/* <i className="fi flaticon-bed d-block mb-2 fs-4"></i> */}
                                            <span className="d-block text-muted">Bedrooms</span>
                                            <strong>{property.bedrooms}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            {/* <i className="fi flaticon-bathroom d-block mb-2 fs-4"></i> */}
                                            <span className="d-block text-muted">Bathrooms</span>
                                            <strong>{property.bathrooms}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            {/* <i className="fi flaticon-square d-block mb-2 fs-4"></i> */}
                                            <span className="d-block text-muted">Area</span>
                                            <strong>{property.area}</strong>
                                        </div>
                                        <div className="feature text-center">
                                            {/* <i className="fi flaticon-garage d-block mb-2 fs-4"></i> */}
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
                                                    <div className="d-flex align-items-center feature-item">
                                                        <div className="feature-icon-wrapper me-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check text-white" viewBox="0 0 16 16">
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                                            </svg>
                                                        </div>
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
                                            {/* <li className="list-group-item d-flex justify-content-between">
                                                <span>Property Status:</span>
                                                <strong>For Sale</strong>
                                            </li> */}
                                            {/* <li className="list-group-item d-flex justify-content-between">
                                                <span>Property Price:</span>
                                                <strong>{property.price}</strong>
                                            </li> */}
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
                
                /* Feature list styles */
                .feature-item {
                    transition: all 0.3s ease;
                }
                
                .feature-item:hover {
                    transform: translateX(5px);
                }
                
                .feature-icon-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: #f47920;
                    flex-shrink: 0;
                }
                
                /* Gallery Styles */
                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-bottom: 15px;
                }
                
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                
                .gallery-icon {
                    color: white;
                    font-size: 24px;
                }
                
                .nav-pills .nav-link {
                    color: #333;
                    background-color: #f8f9fa;
                    margin-right: 10px;
                    border-radius: 30px;
                    padding: 8px 15px;
                    font-size: 14px;
                }
                
                .nav-pills .nav-link.active {
                    background-color: #f47920;
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default PropertySingle;