import React, {useEffect, useState} from 'react'
import {callFetchAboutUsPageData} from "../pages/api/AdminApi";

function About() {
    const [pageData, setPageData] = useState([]);
    const fetchPageDetails = async () => {
        await callFetchAboutUsPageData().then((json) => {
            let imgSrc = "data:"+json[0].imgType+";base64,"+json[0].image;
            json[0].image = imgSrc;
            let img2Src = "data:"+json[0].img2Type+";base64,"+json[0].image2;
            json[0].image2 = img2Src;
            setPageData(json[0])
        })
    }
    useEffect(fetchPageDetails,[])
    return (
        <>
            <div id="content" className="site-content">
                    <section id="about" className="section-about section-padding onepage-section">

                        <div className="container">
                            <div className="section-title-area">
                                <h2 className="section-title">{pageData.mainHeading}</h2>
                                <div className="section-desc"><p>{pageData.paragraph1}</p>
                                    <p>{pageData.paragraph2}</p>
                                </div>
                                <div className="section-desc">

                                </div>
                                <div className="section-desc">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6  wow slideInUp"
                                     >
                                    <div className="about-image">
                                        {(pageData.image !="") && <img size='md' width="640" height="400" className="attachment-onepress-medium size-onepress-medium wp-post-image" src={pageData.image} />}
                                    </div>
                                    <h3>{pageData.sub_heading1}</h3>
                                    <p>{pageData.sub_heading1_desc}</p>
                                    <p></p>
                                </div>
                                <div className="col-lg-6 col-sm-6  wow slideInUp">
                                    <div className="about-image">
                                        {(pageData.image2 !="") && <img layout="fill" width="640" height="400"
                                                                      src={pageData.image2}
                                                                      className="attachment-onepress-medium size-onepress-medium wp-post-image"
                                                                      alt="" loading="lazy" />}
                                    </div>
                                    <h3>{pageData.sub_heading2}</h3>
                                    <p>{pageData.sub_heading2_desc}</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </>
    )
}
export default About;