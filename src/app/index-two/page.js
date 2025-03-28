import React from "react";
import Image from "next/image";

import VideoTwo from "../components/modalVideo/videoTwo";
import SelectTwo from "../components/select/selectTwo";
import AboutCounter from "../components/counter/aboutCounter";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";
import AboutUs from "../components/about";
import Broker from "../components/broker";
import Featuredproperties from "../components/featuredProperties"
import PropertyType from "../components/propertyTypes";
import ClientTwo from "../components/clientTwo";
import Blog from "../components/blog";

export default function IndexTwo(){
    
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage:"url('/images/bg/01.jpg')"}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">Easy way to find your <br/> dream property</h4>
                            <p className="para-desc text-white-50 title-dark mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                        <SelectTwo/>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="position-relative overflow-hidden shadow p-3 rounded-top-pill rounded-5 bg-white">
                            <Image src='/images/hero.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-top-pill rounded-5" alt="Towntor"/>
                            <VideoTwo/>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-medium mb-2">Our story: Towntor</h6>
                            <h4 className="title mb-3">Efficiency. <br/> Transparency. Control.</h4>
                            <p className="text-muted para-desc mb-0">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Towntor is Real Estate Redefined.</p>
                            <AboutCounter/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-3">Property Types</h4>
                            <p className="text-muted para-desc mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>
               <PropertyType/>
            </div>

            <div className="container mt-100 mt-60">
                <Featuredproperties/>
            </div>

            <div className="container mt-100 mt-60">
               <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
               <Broker/>
            </div>

            <div className="container mt-100 mt-60 client">
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