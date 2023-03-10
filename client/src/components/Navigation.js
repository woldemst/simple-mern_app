import React from "react";
import { Link } from "react-router-dom";
export default function Navigation(){
    return(
        <>
            <nav className="navigation">
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/todo'>Todo</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </nav>
        </>
    )
}