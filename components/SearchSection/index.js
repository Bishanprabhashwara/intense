
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchSection = (props) => {
    // Add state for form values
    const [formData, setFormData] = useState({
        storeys: 'Any',
        bedrooms: 'Any',
        lotWidth: 'Any'
    });

    // Remove unused state
    // const [startDate, setStartDate] = useState(new Date());
    // const [startDates, setStartDates] = useState(new Date());

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    // Create query string from form data
    const queryString = `?storeys=${formData.storeys}&bedrooms=${formData.bedrooms}&lotWidth=${formData.lotWidth}`;

    return(
        <div className={`wpo-select-section ${props.selectClass}`}>
            <div className="container rounded">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form onSubmit={SubmitHandler} className="clearfix">
                                    <div className="select-sub">
                                        <span><i className="fi"></i>STOREYS</span>
                                        <div className="form-group">
                                            <select 
                                                className="select wide"
                                                value={formData.storeys}
                                                onChange={(e) => handleChange(e, 'storeys')}
                                            >
                                                <option>Any</option>
                                                <option>Single</option>
                                                <option>Double</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <span><i className="fi"></i>BEDROOMS</span>
                                        <select 
                                            className="select wide"
                                            value={formData.bedrooms}
                                            onChange={(e) => handleChange(e, 'bedrooms')}
                                        >
                                            <option>Any</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="select-sub">
                                        <span><i className="fi flaticon-user"></i> LOT WIDTH(M)</span>
                                        <select 
                                            className="select wide"
                                            value={formData.lotWidth}
                                            onChange={(e) => handleChange(e, 'lotWidth')}
                                        >
                                            <option>Any</option>
                                            <option>8.5m</option>
                                            <option>10m</option>
                                            <option>10.5m</option>
                                        </select>
                                    </div>
                                    <div className="select-sub">
                                        <Link href={`/search-result${queryString}`} className="theme-btn-s2">
                                            Search
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSection;