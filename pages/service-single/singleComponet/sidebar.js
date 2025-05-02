import React from 'react'
import Link from 'next/link'


const Sidebar = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="col col-lg-4 col-12 order-lg-1">
            <div className="service-sidebar">
                <div className="widget service-list-widget">
                    <h3>All Services</h3>
                    <ul>
                        {/* <li ><Link onClick={ClickHandler} href='/service'>All Service</Link></li> */}
                        <li><Link onClick={ClickHandler} href='/service-single/living_room'>Living Room</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/bed_room'>Bed Room</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/modern_kitchen'>Modern Kitchen</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/luxury_bathrooms'>Luxury Bathrooms</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/swimming_pool'>Swimming Pool</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/outdoor_entertainment_area'>Outdoor Entertainment Area</Link></li>
                    </ul>
                </div>
                <div className="widget contact-widget">
                    <div>
                        <h4>Request a Call Back</h4>
                        <h2>+04 333-278-71</h2>
                    </div>
                </div>
            </div>                    
        </div>
    )
}

export default Sidebar;