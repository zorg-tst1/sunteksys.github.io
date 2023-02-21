import React, {useEffect, useState} from 'react'
import {callFetchContactPageData} from "../pages/api/AdminApi";

function Contact() {
    const [pageData, setPageData] = useState({});

    const fetchPageDetails = async () => {
        await callFetchContactPageData().then((json) => {
            let imgSrc = "data:"+json[0].imgType+";base64,"+json[0].image;
            json[0].image = imgSrc;
            setPageData(json[0])
        })
    }
    useEffect(fetchPageDetails,[])
    return (
        <>
            <div id="content" className="site-content">
                    <section id="contact" className="section-contact section-padding  section-meta onepage-section">
                        <div className="container">
                            <div className="section-title-area">
                                <h2 className="section-title">{pageData.mainHeading}</h2>
                                <div className="section-desc">
                                    {(pageData.image !="") && <img layout="fill" size='md' src={pageData.image} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 wow slideInUp">
                                    <h4>{pageData.subHeading}</h4>
                                    <p>{pageData.mainParagraph}</p>
                                    <br/><br/>
                                    <div className="address-box">

                                        <h3>{pageData.addressHeading}</h3>

                                        <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-map-marker fa-stack-1x fa-inverse"></i></span>

                                            <div className="address-content">{pageData.addressLine1}<br/> {pageData.addressLine2} <br/> {pageData.addressLine3}
                                                <br/> {pageData.addressLine4}</div>
                                        </div>

                                        <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-phone fa-stack-1x fa-inverse"></i></span>
                                            <div className="address-content">{pageData.phoneNumber1}</div>
                                        </div>

                                        <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span>
                                            <div className="address-content"><a
                                                href="mailto:contact@company.com">{pageData.email}</a></div>
                                        </div>

                                        <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-fax fa-stack-1x fa-inverse"></i></span>

                                            <div className="address-content">{pageData.fax}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </>
    )
}

export default Contact;