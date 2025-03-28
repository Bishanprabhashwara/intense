import React from "react";
import Image from "next/image";

import SelectOne from "../components/select/selectOne";
import VideoTwo from "../components/modalVideo/videoTwo";
import Counter from "../components/counter/counter";
import ProprtySlider from "../components/propertySlider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";
import AboutUs from "../components/about";
import Broker from "../components/broker";
import PropertyType from "../components/propertyTypes";
import ClientTwo from "../components/clientTwo";
import Blog from "../components/blog";

export default function IndexSeven(){
    
    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu"/>

        <section className="bg-half-170 d-table w-100 pb-0" style={{backgroundImage:"url('/images/bg.png')", backgroundPosition:"bottom"}}>
            <div className="bg-overlay bg-primary-gradient-overlay z-n1"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold title-dark mb-3">Are you ready to find your dream home</h4>
                            <p className="para-desc text-muted title-dark mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        
                            <div className="row justify-content-center mt-4 pt-2">
                                <div className="col-lg-10">
                                    <div className="card border-0 bg-white shadow z-1">
                                        <SelectOne/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="" style={{marginTop:'-54px'}}>
                            <div className="position-relative overflow-hidden shadow rounded-3">
                                <Image src='/images/bg/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt=""/>
                                <VideoTwo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Property Types</h4>
                            <p className="text-muted para-desc mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>
               <PropertyType/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Featured Properties</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>

                <ProprtySlider/>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="position-relative overflow-hidden rounded-3 shadow py-5" style={{backgroundImage:"url('/images/bg/05.jpg')" ,backgroundPosition:'center' , backgroundAttachment:'fixed'}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                       <Counter/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Broker/>
            </div>

            <div className="container mt-100 mt-60">
               <ClientTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <Blog/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
