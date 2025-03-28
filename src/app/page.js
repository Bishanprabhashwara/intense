import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";
import FeaturedProperties from "./components/featuredProperties"
import ClientOne from "./components/clientOne";
import Broker from "./components/broker";
import AboutUs from "./components/about";
import GetInTuch from "./components/getInTuch";
import Footer from "./components/footer";

import SelectThree from "./components/select/selectThree";
import TextAnimation from "./components/textAnimation";
import ScrollTop from "./components/scrollTop";
import Categories from "./components/categories";


export default function Home() {

  return (
  <>
  <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu nav-left"/>
  <section className="position-relative mt-5 pt-4">
    <div className="container-fluid px-md-4 px-2 mt-2">
        <div className="bg-home-one d-table w-100 shadow rounded-3 overflow-hidden" id="home">
            <div className="bg-overlay image-wrap " id="hero-images" style={{backgroundImage:"url('/images/bg/03.jpg')"}}></div>
            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="title-heading">
                            <TextAnimation/>
                            <p className="para-desc text-white title-dark mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
    <section className="section pt-5">
        <div className="container">
            <SelectThree/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-7 col-6">
                            <Image src="/images/hero.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt="townter" title="Townter"/>
                        </div>
                        
                        <div className="col-lg-5 col-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12">
                                    <Image src="/images/1.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-3" alt="townter" title="Townter"/>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <Image src="/images/logo-icon.png" width={100} height={100} className="img-fluid" alt="townter" title="Townter"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                        <h6 className="text-primary fw-medium mb-2">Our story: Towntor</h6>
                        <h4 className="title mb-3">Efficiency. <br/> Transparency. Control.</h4>
                        <p className="text-muted para-desc mb-0">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Towntor is Real Estate Redefined.</p>
                    
                        <div className="mt-4">
                            <Link href="/aboutus" className="btn btn-pills btn-primary">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <Categories/>
        </div>

        <div className="container mt-100 mt-60">
            <AboutUs/>
        </div>
    
        <div className="container mt-100 mt-60">
            <FeaturedProperties/>
        </div> 

        <div className="container mt-100 mt-60">
            <ClientOne/>
        </div>

        <div className="container mt-100 mt-60">
            <Broker/>
        </div>

        <div className="container mt-100 mt-60">
            <GetInTuch/>
        </div>
    </section>
    <Footer/>
    <ScrollTop/>
  </>
  )
}
