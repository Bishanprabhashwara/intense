import React from 'react'
import Link from 'next/link'
import ab1 from '/public/images/about/__next_static_media_2.c6ab6f47.jpg'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={ab1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>Your Trusted  <br/> Real Estate Partner</h2>
                            </div>
                            <p>At Intense Home, we specialize in helping individuals and families find their dream homes. Based in Australia, we offer expert real estate services across Australia. Whether you’re buying, selling, or investing, our team is here to guide you every step of the way. </p>
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

export default About;