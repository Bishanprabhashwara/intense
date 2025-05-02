import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'

const Service = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`service-area section-padding ${props.sClass}`}>
            <div className="container">
                <div className="section-title">
                    <span>Our Services</span>
                    <h2>What We Offer For You</h2>
                </div>
                <div className="card-grid">
                    {Services.map((service, index) => (
                        <Link
                            key={index}
                            href="/service-single/[slug]"
                            as={`/service-single/${service.slug}`}
                            onClick={ClickHandler}
                            className="link-card"
                        >
                            <div className="service-card">
                                <div className="icon">
                                    <i className={`fi ${service.fIcon}`}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .section-title span {
                    font-size: 16px;
                    color: rgb(69, 69, 70);
                    display: block;
                }

                .section-title h2 {
                    font-size: 32px;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .card-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                }

                .link-card {
                    text-decoration: none;
                    color: inherit;
                }

                .service-card {
                    background: #fff;
                    padding: 30px 20px;
                    border-radius: 12px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.35);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    height: 100%;
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
                }

                .service-card .icon {
                    font-size: 40px;
                    color: #ff6f30;
                    margin-bottom: 20px;
                    transition: transform 0.3s ease;
                }

                .service-card:hover .icon {
                    transform: rotate(10deg) scale(1.2);
                }

                .service-card h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    color: #333;
                    font-weight: 700; /* or 700 for bold */
                }
                .service-card p {
                    font-size: 15px;
                    color: #666;
                }

                @media (max-width: 768px) {
                    .section-title h2 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Service;
