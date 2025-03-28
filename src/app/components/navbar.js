'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import {FiSearch,FiUser} from '../assets/icons/vander'

export default function Navbar({navClass,logolight,menuClass}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [modal, setModal] = useState(false)

    useEffect(() => {
        activateMenu()
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        const closeDropdown =()=>{
            setModal(false)
        }
        document.addEventListener("mousedown", closeDropdown);
        window.scrollTo(0, 0);
      }, []);
        const toggleMenu = () => {
            setisMenu(!isMenu);
            if (document.getElementById("navigation")) {
                const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
                anchorArray.forEach(element => {
                    element.addEventListener('click', (elem) => {
                        const target = elem.target.getAttribute("href")
                        if (target !== "") {
                            if (elem.target.nextElementSibling) {
                                var submenu = elem.target.nextElementSibling.nextElementSibling;
                                submenu.classList.toggle('open');
                            }
                        }
                    })
                });
            }
        };
        function getClosest(elem, selector) {

            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
            }

            // Get the closest matching element
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem;
            }
            return null;

        };

        function activateMenu() {
            var menuItems = document.getElementsByClassName("sub-menu-item");
            if (menuItems) {

                var matchingMenuItem = null;
                for (var idx = 0; idx < menuItems.length; idx++) {
                    if (menuItems[idx].href === window.location.href) {
                        matchingMenuItem = menuItems[idx];
                    }
                }

                if (matchingMenuItem) {
                    matchingMenuItem.classList.add('active');
                
                
                    var immediateParent = getClosest(matchingMenuItem, 'li');
            
                    if (immediateParent) {
                        immediateParent.classList.add('active');
                    }
                    
                    var parent = getClosest(immediateParent, '.child-menu-item');
                    if(parent){
                        parent.classList.add('active');
                    }

                    var parent = getClosest(parent || immediateParent , '.parent-menu-item');
                
                    if (parent) {
                        parent.classList.add('active');

                        var parentMenuitem = parent.querySelector('.menu-item');
                        if (parentMenuitem) {
                            parentMenuitem.classList.add('active');
                        }

                        var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    } else {
                        var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    }
                }
            }
        }
    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {logolight === true ? 
                    <Link className="logo" href="/">
                        <span className="logo-light-mode">
                            <Image src='/images/logo-dark.png' width={132} height={32} className="l-dark" alt=""/>
                            <Image src='/images/logo-light.png' width={132} height={32} className="l-light" alt=""/>
                        </span>
                        <Image src='/images/logo-light.png' width={132} height={32} className="logo-dark-mode" alt=""/>
                    </Link> :
                    <Link className="logo" href="/">
                        <Image src='/images/logo-dark.png' width={132} height={32} className="logo-light-mode" alt=""/>
                        <Image src='/images/logo-light.png' width={132} height={32} className="logo-dark-mode" alt=""/>
                    </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                       
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" onClick={()=>setModal(!modal)}>
                                <FiSearch className="icons"/>
                            </button>
                            <div className={`${modal === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-start bg-white rounded-3 border-0 mt-3 p-0 right-0`} style={{width: "240px", right:"0"}}>
                                <div className="search-bar">
                                    <div id="itemSearch" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform" className="searchform">
                                            <input type="text" className="form-control rounded-3 border" name="s" id="searchItem" placeholder="Search..."/>
                                            <input type="submit" id="searchItemsubmit" value="Search"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-inline-item ps-1 mb-0">
                        <Link href="/auth-login" className="btn btn-sm btn-icon btn-pills btn-primary"><FiUser className="icons"/></Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={menuClass}>
                        <li className="has-submenu parent-menu-item">
                            <Link href="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/" className="sub-menu-item">Hero One</Link></li>
                                <li><Link href="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link href="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li><Link href="/index-four" className="sub-menu-item">Hero Four</Link></li>
                                <li><Link href="/index-five" className="sub-menu-item">Hero Five </Link></li>
                                <li><Link href="/index-six" className="sub-menu-item">Hero Six</Link></li>
                                <li><Link href="/index-seven" className="sub-menu-item">Hero Seven</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/buy" className="sub-menu-item">Buy</Link></li>
                        
                        <li><Link href="/sell" className="sub-menu-item">Sell</Link></li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Listing</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link href="#"> Grid View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                        <li><Link href="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> List View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/list" className="sub-menu-item">List Listing</Link></li>
                                        <li><Link href="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Property Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                        <li><Link href="/property-detail-two" className="sub-menu-item">Property Detail Two</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>
                                <li><Link href="/features" className="sub-menu-item">Features</Link></li>
                                <li><Link href="/pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link href="/faqs" className="sub-menu-item">Faqs</Link></li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li><Link href="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link href="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link href="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link href="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                        <li><Link href="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link href="#"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link href="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link href="/error" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                        
                        <li><Link href="/contactus" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}