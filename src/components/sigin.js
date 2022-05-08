import React from "react";
import login from"../images/login.svg";

function Signin() {
    return(
        <div className="signin">
            <div className="signInForm">
                <div className="signinheader">
                    <h2>WELCOME BACK</h2>
                    <p>welcome back! Please enter your details.</p>
                </div>
                <div className="signinForm">
                    <form className="form">
                      <label for="name">Email</label>
                      <input type="email" placeholder="your email" required/>
                      <label for="name">Name</label>
                      <input type="password" placeholder="your password" required/>
                      <button type="submit">Sign In</button>
                      <button type="submit">Sign In with Google</button>
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