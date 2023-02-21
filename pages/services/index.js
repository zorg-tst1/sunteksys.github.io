import Services from "../../components/services";
import Header from "../../components/Header";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {

    const router = useRouter();
    useEffect(function loginCheck() {

        if(window.sessionStorage.getItem("isLogged")){
            const userType = window.sessionStorage.getItem("loggedInUserType");
            if(userType === 'Admin'){
                router.push('/admin')
            }
        }
    },[])

    return (
        <>
            <Header></Header>
            <Services></Services>
        </>
    )
}
