import React from 'react';
import ContactForm from '../ContactFrom'

const Contactpage = () => {

    return(
        <div id="Contact" className="contact-area section-padding">
            <div className="container">
                <div className="wpo-contact-info">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-internet"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Hotel Address</span>
                                    </div>
                                </div>
                                <p>9 brighton rise maddingley vic 3340
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Official Mail</span>

                                    </div>
                                </div>
                                <p>Admins@intensehomes.com.au</p>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="info-item">
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-null-1"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Official Phone</span>
                                    </div>
                                </div>
                                <p>+04 333-278-71</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-content">
                    <h2>Send a Message</h2>
                    <div className="contact-form">
                        <ContactForm/>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.359003933375!2d144.39913987497872!3d-37.687767026846096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6be44d5de6edf%3A0x1db3126aac915536!2s9%20Brighton%20Rise%2C%20Maddingley%20VIC%203340%2C%20Australia!5e0!3m2!1sen!2slk!4v1743265540211!5m2!1sen!2slk"></iframe>
                </div>
            </div>
        </div>
     )
        
}

export default Contactpage;
