import React, {useState,useEffect} from 'react'
import { Formik, Field, Form } from "formik";
import {callEditService, callFetchServicePageData} from "../pages/api/AdminApi";
import { useRouter } from 'next/router'

function EditService() {
    const router = useRouter();
    const [pageData, setPageData] = useState([]);
    const [editflag, setEditFlag] = useState(false);
    const editPage = () => {
        setEditFlag(!editflag);
        fetchPageDetails();
    }
    const savePage = async (values) => {
        const request = [];
        const serviceData = {
            "id": values.id,
            "serviceTitle": values.title,
            "serviceImageUrl": "",
            "serviceDesc": values.description
        }
        request.push(serviceData);
        await callEditService(request).then(() => {
            alert("Page Saved");
            editPage();
        })
    }
    const fetchPageDetails = async () => {
        await callFetchServicePageData().then((json) => setPageData(json))
    }
    useEffect(function loginCheck() {
        if(!window.sessionStorage.getItem("isLogged")){
            router.push('/login');
        }
        else {
            if(window.sessionStorage.getItem("loggedInUserType") !== "Admin"){
                router.push('/user');
            }
        }
    })
    useState(fetchPageDetails)
    return (
        <>
            <div id="content" className="site-content">
                <section id="services" className="section-features section-padding section-meta onepage-section">
                    <div className="container">
                        <div className="section-title-area">
                            <h2 className="section-title">Services</h2>
                            <button className={editflag ? "hide" : ""} onClick={editPage} style={{float : "right"}}>Edit Page</button>
                            <button className={editflag ? "" : "hide"} onClick={editPage} style={{float : "right"}} type="submit">Cancel</button>
                        </div>
                        <div className="section-content">
                            <div className="row">
                                {pageData && pageData.map((data) =>
                                    <div key={pageData.id} className="feature-item col-lg-6 col-sm-6 wow slideInUp"
                                         style={{visibility: "visible", animationName: "slideInUp"}}>
                                        <div className="feature-media">
                                            <a title="Services 1" href="#"> <span className="fa-stack fa-5x"><i
                                                className="fa fa-circle fa-stack-2x icon-background-default"></i> <i
                                                className="feature-icon fa fa-laptop fa-stack-1x"></i></span> </a>
                                        </div>
                                        <h4><a className={editflag ? "hide" : ""} title="Services 1" href="#">{data.serviceTitle}</a></h4>
                                        <div className="feature-item-content">
                                            <p className={editflag ? "hide" : ""}>{data.serviceDesc}</p>
                                            <div className={editflag ? "" : "hide"}>
                                                <Formik
                                                    initialValues={{
                                                        id: data.id,
                                                        title: data.serviceTitle,
                                                        description: data.serviceDesc,
                                                    }}
                                                    onSubmit={(values, actions) => savePage(values)}
                                                >
                                                    <Form>
                                                        <label htmlFor="email">Title</label>
                                                        <Field
                                                            id="title"
                                                            name="title"
                                                            placeholder="Lorem Ipsum"
                                                            as="textarea"
                                                        />
                                                        <label htmlFor="email">Description</label>
                                                        <Field
                                                            id="description"
                                                            name="description"
                                                            placeholder="Lorem Ipsum"
                                                            as="textarea"
                                                        />
                                                        <Field
                                                            id="id"
                                                            name="id"
                                                            placeholder="Lorem Ipsum"
                                                            as="textarea"
                                                            hidden="true"
                                                        />
                                                        <button className={editflag ? "" : "hide"} onClick={savePage} style={{float : "right"}} type="submit">Submit</button>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/*<button onClick={savePage} style={{float : "right"}} type="submit">Submit</button>*/}
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default EditService;