import React from 'react'
import Link from 'next/link'

const WhyChoose = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const serviceWrap = [
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-6.75h-6v6.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V9.75z" />
                </svg>
            ),
            title: "Modern Design",
            des: 'Our properties feature large, well-lit rooms that cater to all your living needs, making you feel at home.',
        },
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: "Prime Location",
            des: 'Located in the heart of the city, our homes offer convenience and easy access to key amenities.',
        },
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.719 17.719l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.719 6.281l1.061-1.061M9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                </svg>
            ),
            title: "Affordable Prices",
            des: 'We offer competitive pricing on all our properties, ensuring you get the best value for your investment.',
        },
    ];

    return (
        <div className="why-choose-section">
            <h3>Why Choose Our Homes</h3>
            <div className="feature-grids clearfix">
                {serviceWrap.map((service, index) => (
                    <div className="grid shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-xl" key={index}>
                        <div className="icon">
                            {service.icon}
                        </div>
                        <div className="hover-icon">
                            {service.icon}
                        </div>
                        <h3>
                            <Link onClick={ClickHandler} href='/house-single/Spacious-Rooms'>
                                {service.title}
                            </Link>
                        </h3>
                        <p>{service.des}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChoose;
