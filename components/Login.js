import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/Link';
import logo from "../public/images/logo.png";
import {callLoginUser} from "../pages/api/LoginApi";
import Grid from '@mui/material/Grid';
// import FloatingLabel from "react-bootstrap-floating-label";
const FloatingLabel = dynamic(
    () => import('react-bootstrap-floating-label'),
    { ssr: false }
)

function Login(key, value) {
    const router = useRouter();

    let regSuccess = false;
    let actSuccess = false;
    const [password, setPassword] = useState("");
    const handlePassword = (evt)=>{
        setPassword(evt.target.value)
    }

    const [userName, setUserName] = useState("");
    const handleUserName = (evt)=>{
        setUserName(evt.target.value)
    }
    const [logInStatus, setLogInStatus] = useState(false)

    const loginUser = async () => {
        if(userName.length >3 && password.length > 0){
            await callLoginUser(userName,password)
                .then((json) => {
                    //console.log(json);
                    if(json.errorMsg != null){
                        alert(json.errorMsg);
                    }else {
                        createLoginSession(true,userName,json.firstName,json.lastName,json.id,json.email,json.userType.userType);
                        if(json.userType.userType === "Admin"){
                            router.push("/admin");
                        }
                        else {
                            router.push('/user');
                        }
                    }
                });
        }
    }

    const createLoginSession = (isLoggedIn,userName,firstName,lastName,userId,email,userType) => {
        const loginObject = {
            'userName':lastName,
            "isLoggedIn":isLoggedIn,
            "firstName":firstName,
            "lastName":lastName,
            "email":""
        }
        window.sessionStorage.setItem("isLogged","true");
        window.sessionStorage.setItem("loggedInId",userId);
        window.sessionStorage.setItem("loggedInEmail",email);
        window.sessionStorage.setItem("loggedInUserType",userType);
        //setItem(loginObject);
    }

    //Login Check for logged in scenario
    const loginCheck = () =>  {
        if(window.sessionStorage.getItem("isLogged")){
            // history.push({
            //     pathname:"/jobseeker",
            // });
            //router.push("/jobseeker");
            setLogInStatus("true");
        }
    };
    useEffect(loginCheck,[]);
    //useEffect(loginCheck,[]);

    return (
        <>
            <div className="login-jobs">
                <div className={regSuccess?"reg-success":"hide"}>
                    <span>Registration Activation Email Sent. Please check your email and click on the Activation Link to complete Registration </span>
                </div>
                <div className={actSuccess?"reg-success":"hide"}>
                    <span>Account Activation Successful </span>
                </div>

                <div className="page_heading">
                    <Grid item xs={4}>
                        <Link href="/" style={{margin:"auto"}}>
                            <img
                                src={logo.src}
                                className="attachment-large size-large"
                                alt="logo"></img>
                        </Link>
                    </Grid>
                </div>

                <Grid item xs={3}>
                    <div className="js-login-wrapper">
                        <div className="js-ourlogin">
                            <div className="login-heading">Sign in</div>

                            <form name="loginform-custom" id="loginform-custom"j
                                  action="https://www.jobsryte.com/wp-login.php" method="post">

                                { (typeof window !== "undefined") && <>
                                    <FloatingLabel
                                        className="login-username form-fl"
                                        style={{marginBottom:"15px"}}
                                        inputStyle={{height:"60px",fontSize:"1.8rem",padding: "2rem 0.75rem 0.25rem 0.75rem"}}
                                        labelStyle={{fontSize:"1.8rem",lineHeight:"1.3333",color:"#00000099",fontWeight:"300"}}
                                        label="Username"
                                        type="text"
                                        onChange={(eventTarget)=>handleUserName(eventTarget)}>
                                    </FloatingLabel>
                                    <FloatingLabel ClassName="login-password"
                                                   inputStyle={{height:"60px",fontSize:"1.8rem",padding: "2rem 0.75rem 0.25rem 0.75rem"}}
                                                   labelStyle={{fontSize:"1.8rem",lineHeight:"1.3333",color:"#00000099",fontWeight:"300"}}
                                                   label="Password" type="password"
                                                   onChange={(eventTarget)=>handlePassword(eventTarget)}></FloatingLabel>
                                </>}
                                <p className="login-remember"><label><input name="rememberme" type="checkbox"
                                                                            id="rememberme" value="forever"></input> Keep me signed in </label>
                                </p>
                                <p className="login-submit">
                                    <input type="button" name="wp-submit" id="wp-submit" onClick={() => loginUser()} className="button button-primary"
                                           value="Sign In"></input>
                                    <input type="hidden" name="redirect_to" value="https://www.jobsryte.com"></input>
                                </p>
                                <p>
                                    <a className="jsjb-jh-lost-password"
                                       href="https://www.jobsryte.com/wp-login.php?action=lostpassword">Forgot password?</a></p>
                            </form>
                        </div>
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default Login