import React from "react";
import sign from"../images/sign.svg";

function SignUp() {
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
                    <p>Sign up with Google</p>
                    <p>Sign up with Facebook</p>
                </div>
                <div className="or">
                    <span></span>
                    <p>Or</p>
                    <span></span>
                </div>
                <div className="signUpForm">
                    <form className="form">
                      <label for="name">Name</label>
                      <input type="text" placeholder="your names" required/>
                      <label for="name">Email</label>
                      <input type="email" placeholder="your email" required/>
                      <label for="name">Name</label>
                      <input type="password" placeholder="your password" required/>
                      <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;