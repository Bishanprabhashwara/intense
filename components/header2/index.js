import React from 'react';
import Logo from '/public/images/Finallogowhite.png';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { totalPrice } from "../../utils";
import HeaderTopbar from '../HeaderTopbar';
import Image from 'next/image';

const Header = (props) => {
    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { carts } = props;

    return (
        <div className="middle-header">
            <HeaderTopbar />
            <div className="header-style-2">
                <div className="container-fluid">
                    <div className="header-content">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/" title="">
                                        <Image src={Logo} alt="Site Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 d-lg-block d-none">
                                <nav>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/" title="">Home</Link></li>
                                        <li><Link onClick={ClickHandler} href="/properties" title="">Houses</Link></li>
                                        <li><Link onClick={ClickHandler} href="/destination" title="">Destination</Link></li>
                                        <li><Link onClick={ClickHandler} href="/about" title="">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/service" title="">Service</Link></li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/blog">Blog +</Link>
                                            <ul>
                                                <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog Full Width</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact" title="">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-xl-3 get-q">
                                <div className="get-quote">
                                    <Link href="/contact">
                                        <i className="fi flaticon-support-1 call-image"></i>
                                        Call : +04 333-278-71
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-6 col-sm-6 col-6">
                                <div className="contact">
                                    <div className="cart-search-contact">
                                        {/* Search & Cart Section (optional) */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2">
                                <MobileMenu />
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

            {/* Internal CSS */}
            <style jsx>{`
                .call-image {
                    font-size: 16px !important;
                    margin-right: 10px;
                    color: #ff6f30; /* optional: make the icon orange */
                }
            `}</style>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
