import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading"; 
import {
    useNavigate,
    Navigate, Outlet, useLocation 
  } from "react-router-dom";
export default function RedirectPage(){
    const navigate = useNavigate();
    const isAuthenticated  = localStorage.getItem("access_token")?true:false;
    useEffect(()=>{
        setTimeout(()=>{
            isAuthenticated? navigate('dashboard'):navigate('login');
        },2000)
    });

    return <Loading></Loading>
}