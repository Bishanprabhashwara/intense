import React from 'react'
import Link from 'next/link'
import erimg from '../../public/404.jpg'
import Image from 'next/image'

const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                        <div className="">
                                <Image 
                                    src={erimg} 
                                    alt="404 error" 
                                    width={400} 
                                    height={300} 
                                    className="mx-auto rounded-lg shadow-md"
                                    priority
                                />
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link href="/home2" className="theme-btn-s4">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default Error;