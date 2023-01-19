import React, { useState } from 'react';


function SignUpSubmmit() {

    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);


    const handleUserNameEvent = (event) => {
        setValues({ ...values, email: event.target.value })
    };


    const handleNameEvent = (event) => {
        setValues({ ...values, name: event.target.value })
    };


    const handlepasswordEvent = (event) => {
        setValues({ ...values, password: event.target.value })
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setValues({ email: "", name: "", password: "" });

    };
    
    return (
        
        <div>
            
            <form onSubmit={handleSubmit}>
                <h2>Create a new user</h2>
                <h3>Username</h3>
                <input onChange={handleUserNameEvent} id="create-username-text" name="userName" type="text" />
                <h3>Name</h3>
                <input onChange={handleNameEvent} id="create-name-text" name="name" type="text" />
                <h3>Password</h3>
                <input onChange={handlepasswordEvent} id="create-password-text" name="password" type="password" />
                <button id="create-button">Create User</button>
                {submitted ? <div className="success-message">Thank you for register here!</div> : null}
            </form>
        </div>
    )
    
};
// function signup() {
//     // POST sign-up
//     // get the token and store it Localstorage
//     fetch('http://localhost:3000/users/sign-up', {
//         method: 'POST',
//         body: {
//             "name": name,
//             "password": password,
//             "email": email
//         }
//     })
//     .then(data => data.json())
//     .then(response => {
//         window.localStorage.setItem('token', response.jwtToken)
//     })
//     // if there are any errors, display the error
    
// }


export default SignUpSubmmit;