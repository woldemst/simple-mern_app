import React from "react";
import logo from '../images/w.svg'
import Navigation from "./Navigation";

export default function Header(){
    return ( 
        <>
            <div className="header-main">
                <div className="header-logo">
                    <img src={logo} alt="" className="logo-img" />
                </div>
                <Navigation />
            </div>
        </>
    )
}