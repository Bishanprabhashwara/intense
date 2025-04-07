"use client";

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary p-4 text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="bg-light rounded shadow p-5">
                                    <h2 className="text-danger mb-4">Oops! Something went wrong</h2>
                                    <p className="text-muted mb-4">
                                        We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => window.location.reload()}
                                    >
                                        Refresh Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;