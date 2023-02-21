import React, {useState} from 'react'
import {callFetchServicePageData} from "../pages/api/AdminApi";

function Services() {

    const [pageData, setPageData] = useState([]);

    const fetchPageDetails = () => {
        callFetchServicePageData().then((json) => {
            //console.log(json);
            setPageData(json)
        })
    }
    useState(fetchPageDetails);

    return (
        <>
            <div id="content" className="site-content">
                    <section id="services" className="section-features section-padding section-meta onepage-section">
                        <div className="container">
                            <div className="section-title-area">
                                <h2 className="section-title">Services</h2></div>
                            <div className="section-content">
                                <div className="row">
                                    {pageData && pageData.map((data) =>
                                        <div key={data.id}className="feature-item col-lg-6 col-sm-6 wow slideInUp"
                                             style={{visibility: "visible", animationName: "slideInUp"}}>
                                            <div className="feature-media">
                                                <a title="Services 1" href="#"> <span className="fa-stack fa-5x"><i
                                                    className="fa fa-circle fa-stack-2x icon-background-default"></i> <i
                                                    className="feature-icon fa fa-laptop fa-stack-1x"></i></span> </a>
                                            </div>
                                            <h4><a title="Services 1" href="#">{data.serviceTitle}</a></h4>
                                            <div className="feature-item-content"><p>{data.serviceDesc}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </section>
            </div>
        </>
    )
}
export default Services;