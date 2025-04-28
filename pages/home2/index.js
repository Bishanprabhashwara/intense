import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero2 from '../../components/hero2';
import SearchSection from '../../components/SearchSection'
import About2 from '../../components/about2'
import Destination2 from '../../components/Destination2'
import RoomSection from '../../components/RoomSection'
import Features from '../../components/Features'
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Link from 'next/link';

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero2 heroClass={'hero-style-2'}/>

            <SearchSection/>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="v-collection-card p-5 border border-warning" style={{borderRadius: '8px'}}>
                            <h2 className="mb-4">V Collection - Quality Made Affordable</h2>
                            <p className="mb-4">Quality homes made affordable, with essential inclusions combined with functional floorplans designed to meet your everyday needs.</p>
                            
                            <div className="features-list mb-4">
                                <div className="feature-item d-flex align-items-center mb-3">
                                    <div className="feature-icon me-3" style={{backgroundColor: '#ffd8b6', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <span style={{color: '#f47920', fontSize: '24px'}}>$</span>
                                    </div>
                                    <div className="feature-text">Homes starting from $199,900</div>
                                </div>
                                
                                <hr className="my-3" />
                                
                                <div className="feature-item d-flex align-items-center mb-3">
                                    <div className="feature-icon me-3" style={{backgroundColor: '#ffd8b6', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <span style={{color: '#f47920', fontSize: '24px'}}>↔</span>
                                    </div>
                                    <div className="feature-text">8.5m - 14m Lot Frontage</div>
                                </div>
                                
                                <hr className="my-3" />
                                
                                <div className="feature-item d-flex align-items-center mb-4">
                                    <div className="feature-icon me-3" style={{backgroundColor: '#ffd8b6', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <span style={{color: '#f47920', fontSize: '24px'}}>✓</span>
                                    </div>
                                    <div className="feature-text">Quality Homes</div>
                                </div>
                            </div>
                            
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link href="/search-result?storeys=Any&bedrooms=Any&lotWidth=Any" className="btn btn-outline-warning px-4 py-2" style={{borderRadius: '25px', borderWidth: '2px', color: '#f47920', fontWeight: 'bold'}}>
                                    BUILD A QUOTE
                                </Link>
                                {/* <Link href="/search-result?storeys=Any&bedrooms=Any&lotWidth=Any" className="btn btn-warning px-4 py-2" style={{borderRadius: '25px', backgroundColor: '#f47920', borderColor: '#f47920', color: 'white', fontWeight: 'bold'}}>
                                    VIEW DESIGNS
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <About2/>
            <Destination2/>
            {/* <RoomSection/> */}
            <Features/>
            <Testimonial/>
            <BlogSection/> 
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;