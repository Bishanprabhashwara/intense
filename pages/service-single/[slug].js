import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Services from '../../api/service';
import Footer from '../../components/footer';
import Image from 'next/image';
import WhyChoose from './singleComponet/whyChose';
import Categorys from './singleComponet/categorys';
import Sidebar from './singleComponet/sidebar';

const DestinationSinglePage = (props) => {
    const router = useRouter();
    const serviceDetails = Services.find(item => item.slug === router.query.slug);

    const renderIntroText = () => {
        switch (serviceDetails?.name) {
            case 'bed':
                return (
                    <>
                        <p>This luxury bedroom offers a perfect blend of comfort and style, featuring soft ambient lighting, high-thread-count linens, and tastefully curated décor. Every element is designed to create a serene sanctuary where rest and rejuvenation come naturally.</p>
                        <p>With elegant furnishings and a calm, neutral palette, it’s a personal haven where sophistication meets relaxation. Whether winding down after a long day or enjoying a lazy morning, this space offers tranquility in its finest form.</p>
                    </>
                );
            case 'living':
                return (
                    <>
                        <p>The modern living room is an open, airy space that effortlessly combines sleek design with cozy functionality. Clean lines, subtle textures, and high-end finishes come together to create a room that feels both sophisticated and welcoming.</p>
                        <p>Perfect for hosting guests or enjoying quiet evenings, this living room is the heart of the home, offering a seamless balance of comfort and contemporary style.</p>
                    </>
                );
            case 'kitchen':
                return (
                    <>
                        <p>This state-of-the-art kitchen is where functionality meets style. Outfitted with top-of-the-line appliances, elegant cabinetry, and spacious countertops, it’s designed for everything from everyday meals to gourmet creations.</p>
                        <p>Whether you're entertaining or cooking for your family, the thoughtfully laid-out space inspires culinary excellence in a setting that’s as beautiful as it is efficient.</p>
                    </>
                );
            case 'pool':
                return (
                    <>
                        <p>A beautifully designed swimming pool that redefines outdoor luxury. Surrounded by lush landscaping and featuring crystal-clear waters, this area is crafted for maximum relaxation and visual appeal.</p>
                        <p>From early morning swims to sunset gatherings, this poolside paradise offers the ultimate leisure experience, blending style, serenity, and sophistication.</p>
                    </>
                );
            case 'outdoor':
                return (
                    <>
                        <p>The outdoor living and entertainment area is a seamless extension of your home, bringing comfort and elegance into the open air. With stylish seating, integrated lighting, and a modern BBQ setup, it’s the ideal space for hosting friends or relaxing under the stars.</p>
                        <p>From weekend get-togethers to tranquil solo moments, this outdoor area is designed to enhance your lifestyle and elevate every occasion.</p>
                    </>
                );
            case 'bath':
                return (
                    <>
                        <p>Step into a luxury bathroom that offers the ambiance of a private spa. With features like freestanding tubs, rainfall showers, and marble accents, this space is a true retreat from the stresses of daily life.</p>
                        <p>Every detail is carefully chosen to promote relaxation and refinement, delivering a bathing experience that feels indulgent, serene, and completely rejuvenating.</p>
                    </>
                );
            default:
                return null;
        }
    };
    

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} />
            {/* <div className="container pt-4">
                {renderIntroText()}
            </div> */}
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'destination'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12 order-lg-2">
                            <div className="service-single-content">
                                <div className="service-single-des">
                                    <div className="service-single-img">
                                        <Image src={serviceDetails?.ssImg} alt="" />
                                    </div>
                                    <h2>{serviceDetails?.title}</h2>
                                        <div className="container pt-4">
                                            {renderIntroText()}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mb-2">
                                            <Image src={serviceDetails?.ssImg1} alt="" />
                                        </div>
                                        <div className="col-6 mb-2">
                                            <Image src={serviceDetails?.ssImg2} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <Image src={serviceDetails?.ssImg3} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <Image src={serviceDetails?.ssImg4} alt="" />
                                        </div>
                                    </div>
                                <WhyChoose />
                                {/* <Categorys /> */}
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default DestinationSinglePage;
