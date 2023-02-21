import Services from "../../components/services";
import HeaderAdmin from "../../components/HeaderAdmin";
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
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

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <Services></Services>
        </>
    )
}
