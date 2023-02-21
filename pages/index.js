import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import home_img from "../public/images/16437481572_351e899980_o.jpg"
import home_img2 from "../public/images/1.jpg"
import {useRouter} from 'next/router'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
// import Carousel from "react-responsive-carousel/lib/ts/components/Carousel";
import Slider from "react-slick";

export default function Home() {
    let imageHeight = "850px";
    const [imgHeight,setImageHeight] = useState(imageHeight);
    const router = useRouter();
    const slideImages = [
        {
            url: home_img.src,
            caption: 'Slide 1'
        },
        {
            url: home_img2.src,
            caption: 'Slide 2'
        },
        {
            url: home_img.src,
            caption: 'Slide 3'
        },
    ];
    useEffect(function loginCheck() {
        console.log("layout effect");
        //debugger;
        imageHeight = window.innerWidth*(1080/1620);
        imageHeight = (imageHeight-75)>window.innerHeight?(window.innerHeight-75)+"px":imageHeight+"px";
        setImageHeight(imageHeight);
        console.log("imageHeight",imageHeight);
        if (window.sessionStorage.getItem("isLogged")) {
            const userType = window.sessionStorage.getItem("loggedInUserType");
            if (userType !== "Admin") {
                router.push('/user');
            } else if (userType === 'Admin') {
                router.push('/admin')
            }
        }
    }, [])

    const settings = {};

    return (
        <>
            <Header></Header>
            <div id="content" className="site-content">
                <section id="services" className="">
                    <div className="">
                        <div className="section-content">
                            <div className="slide-container">
                                {/*<Carousel showArrows={false} infiniteLoop={true}>*/}
                                {/*    {slideImages.map((slideImage, index) => (*/}
                                {/*    <div key={index}>*/}
                                {/*        <img src={slideImage.url} />*/}
                                {/*    </div>*/}
                                {/*    ))}*/}
                                {/*</Carousel>*/}
                                {/*<Slider {...settings}>*/}
                                {/*    <div>*/}
                                {/*        <img src="http://placekitten.com/g/400/200" />*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <img src="http://placekitten.com/g/400/200" />*/}
                                {/*    </div>*/}
                                {/*</Slider>*/}
                                <Slide arrows={false} canSwipe={true} pauseOnHover={false} indicators={false}>
                                    {slideImages.map((slideImage, index) => (
                                        <div className="each-slide" key={index}>
                                            <div style={{'backgroundImage': `url(${slideImage.url})`,height: imgHeight}}>
                                                {/*<span>{slideImage.caption}</span>*/}
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                                <div className="row hero__content hero-content-style2 slider-overlay-content">
                                    <div className="col-md-12 col-lg-12">
                                        <div className="hcl2-content slider-overlay-text-wrpr">
                                            <h1>We make Business</h1>
                                            <h1>Simple.</h1>
                                            <p>We provide creative solutions to clients around the world,</p>
                                            <p>creating things that get attention and meaningful.</p>
                                            <p>
                                                <a className="slider-overlay-btn" href="#">Get Started</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                    </div>
                                </div>
                            </div>
                            {/*<img src={home_img.src}/>*/}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}