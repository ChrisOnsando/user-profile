import React, { useState } from "react";
import sign from"../images/sign.png";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    let newUser = [];

    function addToLocalStorage() {
        localStorage.setItem('Users', JSON.stringify(newUser));
    }

    function handleSignUp(e) {
        e.preventDefault();
        newUser.push({
            userId: Math.floor(Math.random * 51),
            name,
            email,
            pwd,
            isLoggedIn: false,
        });
        addToLocalStorage();
        console.log(newUser)
    }

    return(
        <div className="SignUp">
            <div className="leftSignUp">
                <img src={sign} alt="signup image" />
            </div>
            <div className="signUpForm">
                <div className="signUpheader">
                    <h2>GET STARTED</h2>
                    <p>Already have an account? <a href="#">Sign In</a></p>
                </div>
                <div className="signupwith">
                    <p className="google">Sign up with Google</p>
                    <p className="facebook">Sign up with Facebook</p>
                </div>
                <div className="or">
                    <span></span>
                    <p>Or</p>
                    <span></span>
                </div>
                <div className="signUpForm">
                    <form onSubmit={handleSignUp} className="form">
                      <label for="name">Name</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="your names" required/>
                      <label for="name">Email</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" required/>
                      <label for="name">Password</label>
                      <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="your password" required/>
                      <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;