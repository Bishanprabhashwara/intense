import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";
import FeatureProperties from '../components/featuredProperties'
import Broker from "../components/broker";
import Categories from "../components/categories";
import ClientTwo from "../components/clientTwo";
import Blog from "../components/blog";

import FormTab from "../components/formTab";
import AboutRight from "../components/aboutRight";
import AboutCounter from "../components/counter/aboutCounter";

export default function IndexFive(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu nav-right"/>
        <section className="bg-half-170 d-table w-100 bg-soft-primary">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading me-lg-5">
                            <h4 className="heading fw-bold text-dark mb-3">Easy Way to Find <br/> Your <span className="text-primary">Dream Home</span></h4>
                            <p className="para-desc text-muted title-dark">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                             <FormTab/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <AboutRight/>
                    </div>
                </div>
            </div>
          
        </section>
        <section className="section">
            <div className="container">
               <Categories/>
            </div>

            <div className="container mt-100 mt-60">
                <FeatureProperties/>
            </div>

            <div className="container-fluid bg-building-pic mt-100 mt-60">
                <div className="position-absolute top-0 left-0 right-0 bottom-0 w-100 h-100 opacity-25" style={{backgroundImage:"url('/images/map.png')", backgroundPosition:"center" }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Trusted by more than 10K users</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                            </div>
                        </div>
                    </div>

                    <AboutCounter/>
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


