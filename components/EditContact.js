import React, {useEffect, useState} from 'react'
import {Field, Form, Formik} from "formik";
import {
    callcontactimage,
    callEditContact,
    callEditService,
    callFetchContactPageData,
    callFetchServicePageData, callSubmitimage
} from "../pages/api/AdminApi";
import { useRouter } from 'next/router'

function EditContact() {
    const router = useRouter();
    const [pageData, setPageData] = useState({});
    const [editflag, setEditFlag] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState();
    const editPage = () => {
        setEditFlag(!editflag);
        fetchPageDetails();
    }
    const fetchPageDetails = async () => {
        await callFetchContactPageData().then((json) => {
                setPageData(json[0])
                let imgSrc = "data:"+json[0].imgType+";base64,"+json[0].image;
                setImageUrl(imgSrc);
                let blob = new Blob([json[0].image], {type: "image/jpeg"});
                let objectURL = URL.createObjectURL(blob);
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                        // setImage(fileReader.result)
                        // setImageUrl(fileReader.result)
                        console.log("img =======================================", fileReader.result)
                    }
                };
                fileReader.readAsDataURL(blob);
            }
        )
    }

    const handleResumeUpload = (evt) => {
        //console.log(evt);
        saveImage(evt.target.files[0]);
    }

    const saveImage = (file) => {
        const formData = new FormData();
        if (!!file && null != file) {
            formData.append('file', file);
        } else {
            formData.append('file', selectedFile);
        }

        callcontactimage(formData).then((json) => {

        }).catch((error) => {
            //NotificationApi.NotifyError("Error Uploading Resume!");
            console.log("Error:", error);
        });
    }

    const savePage = async (values) => {
        //const request = [];
        //console.log("values c ", values)
        const request = {
            "id": pageData.id,
            "mainHeading": values.mainHeading,
            "subHeading": values.subHeading,
            "mainParagraph": values.mainParagraph,
            "addressHeading": values.addressHeading,
            "addressLine1": values.addressLine1,
            "addressLine2": values.addressLine2,
            "addressLine3": values.addressLine3,
            "addressLine4": values.addressLine4,
            "phoneNumber1": values.phoneNumber1,
            "email": values.email,
            "fax": values.fax,
        }
        //request.push(serviceData);
        console.log("page request", request)
        await callEditContact(request).then(() => {
            alert("Page Saved");
            editPage()
        })
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
    useEffect(fetchPageDetails, [])
    return (
        <>
            <div id="content" className="site-content">
                {pageData && <section id="contact" className="section-contact section-padding  section-meta onepage-section">
                    <div className={editflag ? "hide" : "container"}>
                        <div className="section-title-area">
                            <h2 className="section-title">{pageData.mainHeading}</h2>
                            <button className={editflag ? "hide" : ""} onClick={editPage} style={{float: "right"}}>Edit
                                Page
                            </button>
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

                                        <div
                                            className="address-content">{pageData.addressLine1}<br/> {pageData.addressLine2}
                                            <br/> {pageData.addressLine3}
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
                                    <div className="section-desc">
                                        {imageUrl && <img size='md' src={imageUrl}/>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={editflag ? "container" : "hide"}>
                        <button className={editflag ? "" : "hide"} onClick={editPage} style={{float: "right"}}
                                type="submit">Cancel
                        </button>

                        <Formik
                            initialValues={{
                                id: pageData.id,
                                mainHeading: pageData.mainHeading,
                                subHeading: pageData.subHeading,
                                mainParagraph: pageData.mainParagraph,
                                addressHeading: pageData.addressHeading,
                                addressLine1: pageData.addressLine1,
                                addressLine2: pageData.addressLine2,
                                addressLine3: pageData.addressLine3,
                                addressLine4: pageData.addressLine4,
                                phoneNumber1: pageData.phoneNumber1,
                                email: pageData.email,
                                fax: pageData.fax,
                            }}
                            onSubmit={(values, actions) => savePage(values)}
                        >
                            <Form>
                                <button className={editflag ? "" : "hide"} style={{float: "right"}}
                                        type="submit">Submit
                                </button>
                                <div className="section-title-area">
                                    <h2 className="section-title">
                                        <label htmlFor="email">Main Heading</label>
                                        <Field
                                            id="mainHeading"
                                            name="mainHeading"
                                            as="textarea"
                                        />
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 wow slideInUp">
                                        <h4>
                                            <label htmlFor="email">Sub Heading</label>
                                            <Field
                                                id="subHeading"
                                                name="subHeading"
                                                as="textarea"
                                            />
                                        </h4>
                                        <div className="section-desc">
                                            <p>
                                                <label htmlFor="email">Main Paragraph</label>
                                                <Field
                                                    id="mainParagraph"
                                                    name="mainParagraph"
                                                    as="textarea"
                                                />
                                            </p>
                                            <br/><br/>
                                            <div className="address-box">
                                                <h3>
                                                    <label htmlFor="email">Address Heading</label>
                                                    <Field
                                                        id="addressHeading"
                                                        name="addressHeading"
                                                        as="textarea"
                                                    />
                                                </h3>
                                                <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-map-marker fa-stack-1x fa-inverse"></i></span>

                                                    <div className="address-content">
                                                        <label htmlFor="email">Address Line1</label>
                                                        <Field
                                                            id="addressLine1"
                                                            name="addressLine1"
                                                            as="textarea"
                                                        />
                                                        <br/>
                                                        <label htmlFor="email">Address Line2</label>
                                                        <Field
                                                            id="addressLine2"
                                                            name="addressLine2"
                                                            as="textarea"
                                                        />
                                                        <br/>
                                                        <label htmlFor="email">Address Line3</label>
                                                        <Field
                                                            id="addressLine3"
                                                            name="addressLine3"
                                                            as="textarea"
                                                        />
                                                        <br/>
                                                        <label htmlFor="email">Address Line4</label>
                                                        <Field
                                                            id="addressLine4"
                                                            name="addressLine4"
                                                            as="textarea"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-phone fa-stack-1x fa-inverse"></i></span>
                                                    <div className="address-content">
                                                        <label htmlFor="email">Phone Number</label>
                                                        <Field
                                                            id="phoneNumber1"
                                                            name="phoneNumber1"
                                                            as="textarea"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span>
                                                    <div className="address-content">
                                                        <p>
                                                            <label htmlFor="email">Email</label>
                                                            <Field
                                                                id="email"
                                                                name="email"
                                                                as="textarea"
                                                            />
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="address-contact">
                                                <span className="fa-stack"><i
                                                    className="fa fa-circle fa-stack-2x"></i><i
                                                    className="fa fa-fax fa-stack-1x fa-inverse"></i></span>

                                                    <div className="address-content">
                                                        <label htmlFor="email">Fax</label>
                                                        <Field
                                                            id="fax"
                                                            name="fax"
                                                            as="textarea"
                                                        />
                                                    </div>
                                                    <label htmlFor="email">Image</label>
                                                    <input
                                                        id="stImage"
                                                        name="stImage"
                                                        type="file"
                                                        accept='image/*'
                                                        onChange={(event) => {
                                                            const fileReader = new FileReader();
                                                            fileReader.onload = () => {
                                                                if (fileReader.readyState === 2) {
                                                                    setImage(fileReader.result)
                                                                }
                                                            };
                                                            fileReader.readAsDataURL(event.target.files[0]);
                                                        }}
                                                        onInput={(evt) => handleResumeUpload(evt)}
                                                    />
                                                    <img size='md' src={image}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>}
            </div>
        </>
    )
}

export default EditContact;