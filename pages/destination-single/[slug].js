import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar'
import Destinations from '../../api/destination'
import Benefits from './benefits'
import DestinationSidebar from './sidebar'
import Footer from '../../components/footer';
import dimg1 from '/public/images/destination-single/2.jpg'
import dimg2 from '/public/images/destination-single/3.jpg'
import melbWest1 from '/public/images/destination-single/west1.jpeg'
import melbWest2 from '/public/images/destination-single/west2.jpg'
import melbNorth1 from '/public/images/destination-single/north1.jpg'
import melbNorth2 from '/public/images/destination-single/north2.jpg'
import melbSE1 from '/public/images/destination-single/southeast1.jpeg'
import melbSE2 from '/public/images/destination-single/southeast2.jpg'
import geelong1 from '/public/images/destination-single/geelong1.png'
import geelong2 from '/public/images/destination-single/geelong2.jpg'
import Image from 'next/image';


const DestinationSinglePage = (props) => {

    const router = useRouter()

    const destinationDetails = Destinations.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={destinationDetails?.title} pagesub={'destination'} />
            <section className="wpo-destination-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-destination-single-wrap">
                                <div className="wpo-destination-single-content">
                                    <Image 
                                        src={destinationDetails?.dSimg} 
                                        alt={destinationDetails?.title}
                                        width={800}
                                        height={500}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="wpo-destination-single-content-des">
                                        <h2>{destinationDetails?.title}</h2>
                                        {destinationDetails?.title === "Melbourne’s West" ? (
                                            <>
                                                <p>Discover Melbourne's vibrant western suburbs, a melting pot of cultures and experiences. From the historic Williamstown waterfront to the bustling Footscray Markets, the West offers diverse dining experiences, cultural festivals, and community events.</p>
                                                <p>Home to beautiful parks like Brimbank Park and Werribee Park Mansion, the region combines urban convenience with natural spaces. The area is known for its multicultural food scene, arts community, and growing residential neighborhoods.</p>
                                                <h3>Key Attractions:</h3>
                                                <ul>
                                                    <li>Scienceworks Museum - Interactive science exhibits and planetarium</li>
                                                    <li>Werribee Open Range Zoo - African wildlife experience</li>
                                                    <li>Altona Beach - Family-friendly coastal area</li>
                                                    <li>Footscray Community Arts Centre - Cultural hub</li>
                                                </ul>
                                                <h3>Local Highlights:</h3>
                                                <p>Experience the famous Vietnamese restaurants on Hopkins Street, explore the Sun Theatre's art deco charm in Yarraville, and discover the maritime history at Seaworks Maritime Precinct.</p>
                                            </>
                                        ) : destinationDetails?.title === "Melbourne’s North" ? (
                                            <>
                                                <p>Experience the charm of Melbourne's northern suburbs, where vintage shopping meets cafe culture. From the artistic hub of Brunswick to the historic streets of Carlton, the North is a treasure trove of experiences.</p>
                                                <p>Visit the Queen Victoria Market, explore the Melbourne Zoo, or enjoy the peaceful surrounds of Merri Creek Trail. The area is renowned for its Italian heritage, vibrant music scene, and eclectic mix of restaurants and bars.</p>
                                                <h3>Must-Visit Places:</h3>
                                                <ul>
                                                    <li>Lygon Street - Melbourne's Little Italy</li>
                                                    <li>CERES Environmental Park - Community gardens and markets</li>
                                                    <li>Preston Market - Diverse food and shopping</li>
                                                    <li>Edinburgh Gardens - Popular community space</li>
                                                </ul>
                                                <h3>Cultural Experience:</h3>
                                                <p>Explore the street art in Brunswick, enjoy live music venues in Northcote, and discover the thriving cafe scene along High Street and Sydney Road.</p>
                                            </>
                                        ) : destinationDetails?.title === "Melbourne’s South East" ? (
                                            <>
                                                <p>Welcome to Melbourne's South East, where urban sophistication meets beachside living. From the upmarket boutiques of Chapel Street to the serene beaches of Brighton, this region offers a perfect blend of lifestyle and leisure.</p>
                                                <p>Explore the diverse cuisines of Glen Waverley, enjoy shopping at Chadstone - The Fashion Capital, or take a stroll through the beautiful Dandenong Ranges. The area is famous for its shopping districts, multicultural food scene, and family-friendly attractions.</p>
                                                <h3>Popular Destinations:</h3>
                                                <ul>
                                                    <li>Brighton Beach Bathing Boxes - Iconic beach landmarks</li>
                                                    <li>Puffing Billy Railway - Historic steam train</li>
                                                    <li>Chadstone Shopping Centre - Southern hemisphere's largest mall</li>
                                                    <li>Dandenong Ranges National Park - Natural beauty</li>
                                                </ul>
                                                <h3>Local Features:</h3>
                                                <p>Discover the vibrant Asian cuisine in Box Hill, enjoy water sports at Half Moon Bay, and experience the nightlife along Chapel Street.</p>
                                            </>
                                        ) : destinationDetails?.title === "Geelong" ? (
                                            <>
                                                <p>Discover Geelong, Victoria's second-largest city and gateway to the Great Ocean Road. With its beautiful waterfront, rich history, and modern attractions, Geelong offers something for everyone.</p>
                                                <p>Explore the historic wool museums, enjoy the Eastern Beach swimming enclosure, or take in the views from the Giant Sky Wheel. The city boasts excellent dining options, cultural festivals, and easy access to the Bellarine Peninsula's wineries and beaches.</p>
                                                <h3>Key Attractions:</h3>
                                                <ul>
                                                    <li>Geelong Waterfront - Scenic promenade and dining</li>
                                                    <li>National Wool Museum - Industrial heritage</li>
                                                    <li>You Yangs Regional Park - Hiking and mountain biking</li>
                                                    <li>Little Malop Street - Dining and entertainment precinct</li>
                                                </ul>
                                                <h3>Regional Highlights:</h3>
                                                <p>Visit the Geelong Botanic Gardens, explore the creative Pakington Street precinct, and enjoy the numerous festivals and events throughout the year.</p>
                                            </>
                                        ) : (
                                            <>
                                                <p>Explore this vibrant region of Melbourne, each with its own unique character and charm. Discover local attractions, community spaces, and hidden gems that make this area special.</p>
                                                <p>Experience the local culture, visit nearby attractions, and immerse yourself in the distinctive atmosphere of this Melbourne region.</p>
                                            </>
                                        )}
                                        <div className="wpo-destination-single-sub-img">
                                            <ul>
                                                <li>
                                                    <Image 
                                                        src={
                                                            destinationDetails?.title === "Melbourne’s West" ? melbWest1 :
                                                            destinationDetails?.title === "Melbourne’s North" ? melbNorth1 :
                                                            destinationDetails?.title === "Melbourne’s South East" ? melbSE1 :
                                                            destinationDetails?.title === "Geelong" ? geelong1 :
                                                            dimg1
                                                        }
                                                        alt={`${destinationDetails?.title} view 1`}
                                                        width={400}
                                                        height={300}
                                                        style={{
                                                            width: '100%',
                                                            height: '250px',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </li>
                                                <li>
                                                    <Image 
                                                        src={
                                                            destinationDetails?.title === "Melbourne’s West" ? melbWest2 :
                                                            destinationDetails?.title === "Melbourne’s North" ? melbNorth2 :
                                                            destinationDetails?.title === "Melbourne’s South East" ? melbSE2 :
                                                            destinationDetails?.title === "Geelong" ? geelong2 :
                                                            dimg2
                                                        }
                                                        alt={`${destinationDetails?.title} view 2`}
                                                        width={400}
                                                        height={300}
                                                        style={{
                                                            width: '100%',
                                                            height: '250px',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Benefits />

                            </div>
                        </div>
                        <DestinationSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};


export default DestinationSinglePage;
