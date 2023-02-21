import React, {useEffect, useState} from 'react'
import Link from "next/link"
import logo from "../public/images/logo.png"

function HeaderAdmin() {

    const [isLogged,setIsLogged] = useState(false);
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
        //console.log(window.sessionStorage.getItem("isLogged"));
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
                            <a href="#0" id="nav-toggle">Menu<span></span></a>
                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <ul className="onepress-menu">
                                    <li id="menu-item-1438"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1367 current_page_item menu-item-1438">
                                        <Link href="/admin">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li id="menu-item-28"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28">
                                        <Link href="/admin/editService">
                                            <a>Edit Services</a>
                                        </Link>
                                    </li>
                                    <li id="menu-item-27"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27">
                                        <Link href="/admin/editAbout">
                                            <a>Edit About</a>
                                        </Link>
                                    </li>
                                    <li id="menu-item-32"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                                        <Link href="/admin/editContact">
                                            <a>Edit Contact</a>
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

export default HeaderAdmin