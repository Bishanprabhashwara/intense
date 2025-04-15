import React from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';

const ThankYou = () => {
    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Thank You'} pagesub={'Thank You'} />
            
            <div className="container my-5">
                <div className="card shadow-sm">
                    <div className="card-body text-center py-5">
                        <div className="mb-4">
                            <i className="fa fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <h2 className="mb-3">Thank You for Your Interest!</h2>
                        <p className="lead mb-4">
                            We've received your information and a member of our sales team will contact you shortly to discuss your quote.
                        </p>
                        <p className="mb-4">
                            If you have any immediate questions, please don't hesitate to call us at (03) 1234 5678.
                        </p>
                        <Link href="/home2" className="btn btn-primary btn-lg">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYou;