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
                        <li><Link onClick={ClickHandler} href='/service'>All Service</Link></li>
                        <li className="current"><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Gourmet Kitchen</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Swimming Pool</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Outdoor Living</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Smart Home Technology</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Media Room</Link></li>
                        <li><Link onClick={ClickHandler} href='/service-single/Delicious-Food'>Luxury Bathrooms</Link></li>
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