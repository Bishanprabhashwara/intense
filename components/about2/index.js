import React from 'react'
import Link from 'next/link'
import ab1 from '/public/images/about/__next_static_media_2.c6ab6f47.jpg'
import Image from 'next/image'

const About2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area-2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={ab1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>The Best To Buy <br/> Your Future Home </h2>
                            </div>
                            <p>Intense Homes is committed to crafting high-quality, architecturally designed homes across Melbourne’s West, North, South East, and Geelong regions. Our modern floorplans offer the perfect blend of style and flexibility, catering to every lifestyle. With stunning facades that exude luxury at an affordable price, we make dream homes a reality.

Whether you're a first-time homebuyer, an investor, or a growing family, our thoughtfully designed house and land packages provide the perfect foundation for your future. Experience exceptional craftsmanship, contemporary design, and unmatched value with Intense Homes. </p>
                            <div className="btns">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn-s2">More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2;