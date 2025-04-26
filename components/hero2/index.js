import React, { useState } from "react";
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero2 = (props) => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeProperty, setActiveProperty] = useState(0);
    
    const properties = [
        { name: "Commercial Property", image: "/images/slider/home1.jpg" },
        { name: "Smart Apartment", image: "/images/slider/home3.jpg" },
        { name: "Luxury Property", image: "/images/slider/home4.jpg" }
    ];
    
    const slides = [
        {
            bgImage: "/images/slider/home1.jpg",
            heading: "WE CRAFT FUTURE\nDREAM HOME",
            cta: { text: "Request A Visit", link: "/contact" },
            description: "Realtor Vacation stands for exceptional luxury properties and single properties in the most sought-after districts of the city. Turning houses become dreams as your go-to real estate agent. You can rely on us to help you safely home."
        },
        {
            bgImage: "/images/slider/home3.jpg",
            heading: "FIND YOUR\nPERFECT HOME",
            cta: { text: "Browse Properties", link: "/properties" },
            description: "Experience the finest selection of properties carefully curated by our expert agents. From urban apartments to suburban estates, we have the perfect home waiting for you and your family."
        },
        {
            bgImage: "/images/slider/home4.jpg",
            heading: "LUXURY LIVING\nREDEFINED",
            cta: { text: "Explore Luxury", link: "/luxury" },
            description: "Explore our exclusive premium properties, where luxury meets impeccable design, extraordinary amenities, and prime locations."
        }
    ];
    
    const handlePrevProperty = () => {
        setActiveProperty(prev => (prev === 0 ? properties.length - 1 : prev - 1));
    };
    
    const handleNextProperty = () => {
        setActiveProperty(prev => (prev === properties.length - 1 ? 0 : prev + 1));
    };
    
    const settings = {
        dots: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        beforeChange: (current, next) => {
            setActiveFeature(next);
            setActiveProperty(next);
        }
    };

    return (
        <section className={`hero-modern ${props.heroClass || ""}`}>
            <div className="hero-slider">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <div 
                                className="slide-inner" 
                                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.bgImage})` }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-7 col-md-10 col-12 slide-content">
                                            <div className="slide-heading">
                                                <h1>{slide.heading.split('\n').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        {i === 0 && <br />}
                                                    </React.Fragment>
                                                ))}</h1>
                                            </div>

                                            <Link 
                                                href={slide.cta.link} 
                                                className="request-btn text-white border border-white px-4 py-2 inline-flex items-center gap-2 transition-all duration-300 relative overflow-hidden hover:gap-3 rounded-full"
                                                style={{ borderRadius: '20px', marginBottom: '0rem' }}
                                            >
                                                {slide.cta.text} <span className="arrow transition-transform duration-300">→</span>
                                            </Link>



                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2.5rem' }}>
                                    {/* image cards */}
                                    <div className="property-carousel">

                                        <div className="property-items">
                                            {properties.map((property, idx) => (
                                                <div 
                                                    key={idx} 
                                                    className={`property-item ${idx === activeProperty ? 'active' : ''}`}
                                                    onClick={() => setActiveProperty(idx)}
                                                >
                                                    <div className="property-label">{property.name}</div>
                                                    <div className="property-thumb" style={{ backgroundImage: `url(${property.image})` }}></div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="slide-discription" >
                                            <p>{slide.description}</p>
                                        </div>

                                        <div className="service-badge">
                                            <div className="badge-inner">
                                                <div className="badge-inner-2" >
                                                <span className="badge-number">100%</span>
                                                <span className="badge-text">EXPLORE AND FIND<br />YOUR DREAM PLACE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx>{`
                /* Modern Hero Slider Styles */
                .hero-modern {
                    position: relative;
                    // height: 100vh;
                    overflow: hidden;
                }

                .hero-modern .slide-inner {
                    height: 100vh;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: white;
                    position: relative;
                }

                .hero-modern .slide-content {
                    // padding-left: 2rem;
                    // padding-top: 4rem;
                    z-index: 5;
                }

                .hero-modern .slide-heading h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    margin-bottom: 2rem;
                    // top: 0;
                    line-height: 1.2;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 1) !important;
                }

                .hero-modern .request-btn {
                    display: inline-flex;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.5);
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border: 2px solid white;
                    border-radius: 50px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 2rem;
                    color: rgba(255, 255, 255, 1) !important;
                }

                .request-btn {
                    color: white; /* Text color */
                    border: 2px solid white; /* Border color */
                    padding: 10px 20px;
                    border-radius: 10px;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    text-decoration: none;
                    transition: all 0.3s ease-in-out;
                    position: relative;
                    overflow: hidden;
                    marging-bottom: 2rem;
                }

                .request-btn:hover {
                    background-color: rgba(255, 255, 255, 0.5) !important;
                    transform: scale(0.9) !important;
                }

                

                .request-btn .arrow {
                    display: inline-block;
                    transition: transform 0.3s ease-in-out;
                }

                .request-btn:hover .arrow {
                    transform: translateX(5px); /* Moves arrow to the right on hover */
                }



                .hero-modern .request-btn:hover {
                    background: white;
                    color: #000;
                }

                .hero-modern .request-btn .arrow {
                    margin-left: 0.5rem;
                    font-size: 1.2rem;
                }

                /* Feature Tabs */
                .features-container {
                    position: absolute;
                    top: 50%;
                    right: 10%;
                    transform: translateY(-50%);
                    z-index: 5;
                }

                .feature-tabs {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                .feature-tab {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .feature-tab .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.5);
                    margin-right: 0.8rem;
                }

                .feature-tab.active .dot {
                    background-color: white;
                }

                .feature-tab .label {
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                /* Property Carousel */
                .property-carousel {
                    position: absolute;
                    // bottom: 0%;
                    // left: 0%;
                    // right: 0%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    max-width: 95%;
                    z-index: 5;
                }

                .property-items {
                    display: flex;
                    gap: 1.5rem;
                    padding: 0 1rem;
                    justify-content: center;
                    // background: rgba(203, 10, 10, 0.6);
                    z-index: 9999;
                    position: absolute;
                    margin-left: 2rem;
                    left: 0;
                }

                .property-item {
                    position: relative;
                    width: 170px;
                    height: 110px;
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    background: rgba(207, 207, 207, 0.9);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 10px 10px 10px;
                }

                .property-item.active {
                    opacity: 1;
                    transform: scale(1.1);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 1);
                }

                .property-thumb {
                    width: 100%;
                    height: 80%;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    margin: 10px 0 0 0;
                }

                .property-label {
                    position: absolute;
                    top: 0px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 0.5rem;
                    text-align: center;
                    color: black;
                    font-weight: bold;
                    background: none;
                    padding: 0.5rem 0;
                }

                .prev-arrow, .next-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: white;
                    font-size: 1.2rem;
                }

                .prev-arrow:hover, .next-arrow:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                
                .slide-discription{
                    position: relative;
                    width: 200rem;
                    height: 10rem;
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    background: rgba(104, 104, 104, 0.8);
                    margin: 0 0 0 30rem;
                    padding: 2% 15% 2% 15%;
                    text-align: justify;
                    right: 0;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.9) !important;
                }

                .slide-discription p {
                    color: rgba(255, 255, 255, 0.9) !important;
                }


                /* Hero Description */
                .hero-description {
                    position: absolute;
                    bottom: 5rem;
                    left: 0;
                    width: 100%;
                    padding: 0 10%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    z-index: 5;
                }

                .hero-description p {
                    max-width: 50%;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: rgba(255, 255, 255, 0.9);
                }

                .service-badge {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 3px outset rgba(255, 255, 255, 0.72);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    right: 2rem;
                    animation: rotateBadge 5s infinite linear; /* Apply the animation to rotate continuously */
                }

                .badge-inner {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 2px outset rgba(255, 255, 255, 0.5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    animation: rotateInnerBadge 5s infinite linear; /* Rotate inner badge in a cycle */
                }

                .badge-inner-2{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 2px outset rgba(255, 255, 255, 0.5);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                /* Animation for outer circle */
                @keyframes rotateBadge {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                /* Animation for inner circle */
                @keyframes rotateInnerBadge {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(-360deg); /* Reverse direction for inner rotation */
                    }
                }


                .badge-number {
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1;
                }

                .badge-text {
                    font-size: 0.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-top: 0.2rem;
                }

                /* Slider Customization */
                :global(.hero-modern .slick-dots) {
                    bottom: 2rem;
                    z-index: 5;
                }

                :global(.hero-modern .slick-dots li button:before) {
                    color: white;
                    opacity: 0.5;
                }

                :global(.hero-modern .slick-dots li.slick-active button:before) {
                    opacity: 1;
                }

                :global(.hero-modern .slick-prev),
                :global(.hero-modern .slick-next) {
                    z-index: 10;
                }

                /* Responsive Adjustments */
                @media (max-width: 1200px) {
                    .features-container {
                        right: 5%;
                    }
                    
                    .hero-description {
                        padding: 0 5%;
                    }
                }

                @media (max-width: 991px) {
                    .hero-modern .slide-heading h1 {
                        font-size: 2.8rem;
                    }
                    
                    .features-container {
                        display: none;
                    }
                    
                    .hero-description p {
                        max-width: 70%;
                    }
                }

                @media (max-width: 768px) {
                    .hero-modern .slide-heading h1 {
                        font-size: 2.2rem;
                    }
                    
                    .hero-description {
                        flex-direction: column;
                        align-items: center;
                        gap: 2rem;
                        bottom: 7rem;
                    }
                    
                    .hero-description p {
                        max-width: 100%;
                        text-align: center;
                    }
                    
                    .property-carousel {
                        bottom: 15rem;
                        left: 5%;
                        width: 90%;
                    }

                    .service-badge{
                        display: none;                   
                    }
                    
                    .slide-discription{
                        display: none;                   
                    }

                    .property-items {
                        display: flex;
                        align-items: center; /* vertically centers items */
                        justify-content: center; /* horizontally centers items */
                        left: 0;
                    }

                }


                @media (max-width: 768px) {
                    .property-carousel {
                        left: 23rem !important;
                        width: 100% !important;
                        top: 27rem;
                    }
                }
                    

                @media (max-width: 576px) {
                    .hero-modern .slide-heading h1 {
                        font-size: 1.8rem;
                    }
                    
                    .property-carousel {
                        bottom: 18rem;
                    }
                    
                    .property-item {
                        width: 100px;
                        height: 75px;
                    }

                    .service-badge{
                        display: none;                   
                    }
                    
                    .slide-discription{
                        display: none;                   
                    }
                    
                    .property-carousel {
                        left: 12rem !important;
                        width: 100% !important;
                        top: 22rem;
                    }
                }

                @media (max-width: 376px) {
                    .property-carousel {
                        left: 9rem !important;
                        width: 100% !important;
                        top: 22rem !important;  
                    }
                }

                @media (max-width: 321px) {
                    .property-carousel {
                        left: 6rem !important;
                        width: 100% !important;
                        top: 22rem !important;  
                    }
                }


                
            `}</style>
        </section>
    );
};

export default Hero2;