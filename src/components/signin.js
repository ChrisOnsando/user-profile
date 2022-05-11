import React, { useState } from "react";
import login from"../images/login.png";

function Signin() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');


    function getFromLocalStorage() {
        if(localStorage.getItem('Users')) {
            return JSON.parse(localStorage.getItem('Users'));
        }
    }

    function handleSignIn(e) {
        e.preventDefault();
        let myLocal = getFromLocalStorage();
        myLocal.filter((user) => {
            if(user.email === email && user.pwd === pwd) {
                console.log('matched user!');
            } else {
                console.log('No user found!')
            }
        })
    }

    return(
        <div className="signin">
            <div className="signInForm">
                <div className="signinheader">
                    <h2>WELCOME BACK</h2>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <div className="signinForm">
                    <form onSubmit={handleSignIn} className="form">
                      <label for="name">Email</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" required/>
                      <label for="password">Password</label>
                      <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="**********" required/>
                      <button type="submit">Sign In</button>
                      <button className="google" type="submit">Sign In with Google</button>
                    </form>
                    <p>Don't have an account yet? Sign up for free</p>
                </div>
            </div>
            <div className="leftSignIn">
                <img src={login} alt="signin image" />
            </div>
        </div>
    )
}

export default Signin;