import React, { useState } from "react";
import {getLocalStorageInfo} from "./utils/getLocalStorageInfo"
//import { Route } from "react-router-dom";


function LoginSubmmit() {

     const [values, setValues] = useState({
        email: "",
        password: "",

    });



    const handleUserNameEvent = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handlePasswordEvent = (event) => {
        setValues({ ...values, password: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues({ email: "", password: "" });
        fetch("http://localhost:4000/user/login", {
            method: "POST",
            headers: {
                authorization: getLocalStorageInfo(),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        })
            .then(response => response.json())
            .then((data) => {
                localStorage.setItem("token", data.jwtToken);
                

                console.log(data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="form">
            <form id="form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <hr />
                <h3>Username</h3>
                <input
                    onChange={handleUserNameEvent}
                    value={values.email}
                    id="login-username-text"
                    name="email"
                    type="text" required />
                <h3>Password</h3>
                <input
                    onChange={handlePasswordEvent}
                    value={values.password}
                    id="login-password-text"
                    name="password"
                    type="password" required />
                <button id="login-button">Login</button>
            </form>
        </div>

    );
}

export default LoginSubmmit;