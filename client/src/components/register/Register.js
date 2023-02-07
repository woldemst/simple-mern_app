import React from "react";
import { useState } from "react";
import Axios from 'axios'
import Header from "../Header";
import logo from "../../images/w.svg"

export default function Register(){
    const [values, setValues] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    })

    const [submited, setSubmited] = useState(false)
    const [valid, setValid] = useState(false)

    const handleFirstnameChange = (e) => {
        setValues({
            ...values,
            firstname: e.target.value,
        })
    }
    const handleLastnameChange = (e) => {
        setValues({
            ...values,
            lastname: e.target.value,
        })
    }
    const handleEmailChange = (e) => {
        setValues({
            ...values,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setValues({
            ...values,
            password: e.target.value
        })
    }

    const [listOfUsers, setListOfUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3001/createUser', {
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
        }).then((response) => {
            setListOfUsers([...listOfUsers,
            {
                email: values.email,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,

            }
            ])
        })
        if(values.email && values.password && values.lastname && values.firstname ){
            setValid(true)
        }
        setSubmited(true)
    }

    // creating user 




    return(
        <>
            <Header />
            <div className="register-container" onSubmit={handleSubmit}>

                <div className="register-header">
                    <img src={logo} alt="" width="60px"/>
                </div>

                <div className="register-headline">Create Account</div>

                { submited && valid ? <div className="succes-msg">Succes! Thank you for registration!</div> : null}


                <form className="register-form">
                    <input
                        onChange={handleEmailChange}
                        type="text" 
                        name="email" 
                        placeholder="Email..."
                        value={values.email}
                    />
                    {submited && !values.email ?  <span>Please enter the email</span> : null}

                    <input 
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        placeholder="Password..."
                        value={values.password}
                    />
                    {submited && !values.password ?  <span>Please enter the password</span> : null}

                    <input
                        onChange={handleFirstnameChange}
                        type="text" 
                        name="firstname" 
                        placeholder="Firstname..."
                        value={values.firstname}
                    />
                {submited && !values.firstname ?  <span>Please enter the firstname</span> : null}
                    <input
                        onChange={handleLastnameChange}
                        type="text" 
                        name="lastname" 
                        placeholder="Lastname..."
                        value={values.lastname}
                    />
                    {submited && !values.lastname ? <span>Please enter the lastname</span> : null}


                    <button className="register-btn">Register</button>

                </form>
            </div>
        </>

    )
}