import React, {useEffect, useState} from 'react'
import Link from "next/link"
import logo from "../public/images/logo.png"

function Header() {

    const [isLogged,setIsLogged] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(function loginCheck() {
        if(window.sessionStorage.getItem("isLogged")){
            setIsLogged(true);
        }
    })


    const [logInstatus,setLoginStatus] = useState(true);


    const destroyLoginSession = (isLoggedIn,userName,firstName,lastName) => {
        const loginObject = {
            'userName':"",
            "isLoggedIn":"",
            "firstName":"",
            "lastName":"",
            "email":""
        }
        document.getElementById("logout-menu").className = "hide";
        setLoginStatus(false);
        window.sessionStorage.clear();
    //    console.log(window.sessionStorage.getItem("isLogged"));
    }

    const showMobileMenu = () => {
        setIsMobile(!isMobile);
    }

    return (
        <div id="header-section" className="h-on-top no-transparent">
            <div className="followWrap" style={{height: "75px"}}>
            <header id="masthead" className="site-header header-full-width is-sticky no-scroll no-t h-on-top"
                    role="banner">
                <div className="container">
                    <div className="site-branding">
                        <div className="site-brand-inner has-logo-img no-desc">
                            <div className="site-logo-div">
                                <a href="http://localhost/sunteksys/"
                                   className="custom-logo-link  no-t-logo" rel="home"
                                   itemProp="url">
                                    <img width="152" height="63"
                                         src={logo.src}
                                         className="custom-logo"
                                         alt="SuntekSys.com" loading="lazy"
                                         itemProp="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right-wrapper">
                        <a onClick={showMobileMenu} id="nav-toggle">Menu<span></span></a>
                        <nav id="site-navigation" className="main-navigation" role="navigation">
                            <ul className={isMobile?"onepress-menu onepress-menu-mobile":"onepress-menu"} style={isMobile?{height:"600px"}:{}}>
                                <li id="menu-item-1438"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1367 current_page_item menu-item-1438">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li id="menu-item-28"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28">
                                    <Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li id="menu-item-27"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li id="menu-item-32"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li id="menu-item-32"
                                    className={isLogged?"hide":"menu-item menu-item-type-custom menu-item-object-custom menu-item-32"}>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li id="logout-menu"
                                    className={!isLogged?"hide":"menu-item menu-item-type-custom menu-item-object-custom menu-item-32"}
                                    onClick={() => destroyLoginSession()}>
                                    <Link href="/login">
                                        <a>Logout</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            </div>
        </div>
    )
}

export default Header