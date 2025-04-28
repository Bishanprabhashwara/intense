import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import PageTitle from '../components/pagetitle';
import Link from 'next/link';

const ContactSales = () => {
    const router = useRouter();
    const [quoteData, setQuoteData] = useState({});
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        preferredContact: 'email',
        message: '',
        agreeToTerms: false
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [emailError, setEmailError] = useState(null);

    useEffect(() => {
        // Wait for router to be ready
        if (!router.isReady) return;
        
        // Extract all query parameters
        setQuoteData(router.query);
        setLoading(false);
        
        // Pre-populate message with quote reference
        if (router.query.quoteRef) {
            setFormData(prev => ({
                ...prev,
                message: `I'm interested in discussing my quote (Ref: ${router.query.quoteRef}) further.`
            }));
        }
    }, [router.isReady, router.query]);

    // Format price with commas
    const formatPrice = (price) => {
        return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when field is edited
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};
        
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms';
        
        return errors;
    };

    // Handle form submission with mailto
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        const errors = validateForm();
        setFormErrors(errors);
        
        // If no errors, submit form
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            
            try {
                // Create email subject
                const subject = `Quote Inquiry: ${quoteData.title || 'House'} (Ref: ${quoteData.quoteRef || 'N/A'})`;
                
                // Create email body with all the form and quote data
                const body = `
Hello,

A new quote inquiry has been submitted with the following details:

CONTACT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address || 'Not provided'}
Preferred Contact Method: ${formData.preferredContact}

QUOTE DETAILS:
Quote Reference: ${quoteData.quoteRef || 'N/A'}
Date: ${quoteData.quoteDate || 'N/A'}
House Model: ${quoteData.title || 'N/A'}
Bedrooms: ${quoteData.bedrooms || 'N/A'}
Bathrooms: ${quoteData.bathrooms || 'N/A'}
Garage: ${quoteData.garage || 'N/A'}
Size: ${quoteData.size ? `${quoteData.size} m²` : 'N/A'}
Region: ${quoteData.selectedRegion || 'N/A'}
Color Scheme: ${quoteData.selectedColorScheme || 'N/A'}
Total Price: $${formatPrice(quoteData.totalPrice || 0)}

ADDITIONAL MESSAGE:
${formData.message || 'No additional message provided.'}

Thank you.
                `.trim();
                
                // Encode the subject and body for mailto URL
                const encodedSubject = encodeURIComponent(subject);
                const encodedBody = encodeURIComponent(body);
                
                // Create mailto link with recipient email - replace with your email
                const mailtoLink = `mailto:youremail@example.com?subject=${encodedSubject}&body=${encodedBody}`;
                
                // Open the mailto link
                window.location.href = mailtoLink;
                
                console.log('Form submitted with data:', {
                    contactInfo: formData,
                    quoteDetails: quoteData
                });
                
                // Set success state after a short delay to allow the email client to open
                setTimeout(() => {
                    setIsSubmitting(false);
                    setSubmitSuccess(true);
                    
                    // Create a combined data object with form and quote data
                    const combinedData = {
                        ...formData,
                        ...quoteData
                    };
                    
                    // Encode the data for URL
                    const queryString = new URLSearchParams(combinedData).toString();
                    
                    // Redirect to thank you page after 2 seconds with all data
                    setTimeout(() => {
                        router.push(`/thank-you?${queryString}`);
                    }, 2000);
                }, 1000);
            } catch (error) {
                console.error('Error opening email client:', error);
                setIsSubmitting(false);
                setEmailError('Failed to open email client. Please try again or contact us directly.');
            }
        }
    };

    if (loading) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Contact Sales Team'} pagesub={'Contact'} />
                <div className="container my-5 text-center">
                    <h3>Loading quote data...</h3>
                </div>
            </>
        );
    }

    if (submitSuccess) {
        return (
            <>
                <Navbar hclass={'wpo-header-style-3'} />
                <PageTitle pageTitle={'Contact Sales Team'} pagesub={'Contact'} />
                <div className="container my-5 text-center">
                    <div className="alert alert-success">
                        <h3>Thank You!</h3>
                        <p>Your information has been submitted successfully. A sales representative will contact you shortly.</p>
                        <p>Redirecting to thank you page...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={'Contact Sales Team'} pagesub={'Contact'} />
            
            {/* Progress Indicator */}
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">BUILD YOUR QUOTE</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">FLOORPLAN</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">FACADE</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">COLOURS</div>
                            </div>
                            <div className="progress-step completed">
                                <div className="step-circle">
                                    <span className="checkmark">✓</span>
                                </div>
                                <div className="step-label">UPGRADES</div>
                            </div>
                            <div className="progress-step active">
                                <div className="step-circle">
                                    <span>6</span>
                                </div>
                                <div className="step-label">SUMMARY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container my-5">
                {emailError && (
                    <div className="alert alert-danger mb-4">
                        {emailError}
                    </div>
                )}
                <div className="row">
                    {/* Left Column - Quote Summary */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Quote Summary</h4>
                            </div>
                            <div className="card-body">
                                <h5>{quoteData.title}</h5>
                                <p className="text-muted">Quote #: {quoteData.quoteRef}</p>
                                <p className="text-muted">Date: {quoteData.quoteDate}</p>
                                
                                <hr />
                                
                                <h6>House Specifications</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Bedrooms:</span>
                                        <strong>{quoteData.bedrooms}</strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Bathrooms:</span>
                                        <strong>{quoteData.bathrooms}</strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Garage:</span>
                                        <strong>{quoteData.garage}</strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Size:</span>
                                        <strong>{quoteData.size} m²</strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Region:</span>
                                        <strong>{quoteData.selectedRegion}</strong>
                                    </li>
                                </ul>
                                
                                <h6>Selected Options</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Color Scheme:</span>
                                        <strong>{quoteData.selectedColorScheme}</strong>
                                    </li>
                                </ul>
                                
                                <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0">Total Price:</h6>
                                        <h5 className="text-primary mb-0">${formatPrice(quoteData.totalPrice)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Contact Form */}
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Contact Information</h4>
                            </div>
                            <div className="card-body">
                                <p>Please provide your contact details so our sales team can get in touch with you about your quote.</p>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {formErrors.firstName && (
                                                <div className="invalid-feedback">{formErrors.firstName}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName" className="form-label">Last Name *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {formErrors.lastName && (
                                                <div className="invalid-feedback">{formErrors.lastName}</div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">Email Address *</label>
                                            <input
                                                type="email"
                                                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {formErrors.email && (
                                                <div className="invalid-feedback">{formErrors.email}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number *</label>
                                            <input
                                                type="tel"
                                                className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {formErrors.phone && (
                                                <div className="invalid-feedback">{formErrors.phone}</div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label className="form-label">Preferred Contact Method</label>
                                        <div className="d-flex">
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="preferredContact"
                                                    id="contactEmail"
                                                    value="email"
                                                    checked={formData.preferredContact === 'email'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="contactEmail">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="preferredContact"
                                                    id="contactPhone"
                                                    value="phone"
                                                    checked={formData.preferredContact === 'phone'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="contactPhone">
                                                    Phone
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="preferredContact"
                                                    id="contactBoth"
                                                    value="both"
                                                    checked={formData.preferredContact === 'both'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="contactBoth">
                                                    Both
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Additional Information</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <div className={`form-check ${formErrors.agreeToTerms ? 'is-invalid' : ''}`}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="agreeToTerms"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="agreeToTerms">
                                                I agree to be contacted about my quote and understand that my information will be used in accordance with the privacy policy.
                                            </label>
                                            {formErrors.agreeToTerms && (
                                                <div className="invalid-feedback">{formErrors.agreeToTerms}</div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex justify-content-between mt-4">
                                        <Link href="/quote-summary" className="btn btn-outline-secondary">
                                            Back to Quote
                                        </Link>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Submitting...
                                                </>
                                            ) : 'Submit Information'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSales;