import React from "react";
import Header from "../components/Header";
import logo from '../images/w.svg'

export default function Authentication(){
    return(
        <>  
            <Header />
            <div className="auth-container">
                <div className="auth-logo">
                    <img src={logo} alt="logo" />
                </div>

                <form className="login-form" action="post">
                    <div className="auth-wrap">
                        <input type="text" placeholder="Username..."/>
                    </div>
                    <div className="auth-wrap">
                        <input type="password"  placeholder="Password..." />
                    </div>
                    <button className="log-btn">Login</button>
                </form>

                <div className="log-functions">
                    <a href="#" className="restore">Forgot email address?</a>
                    <a href="#" className="support">Help</a>

                    <a href="#" className="registration"></a>
                </div>

            </div>
        </>
    )
}