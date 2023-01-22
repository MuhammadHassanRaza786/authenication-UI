import React, { useState } from "react";
import logo from './img/logo.svg';
import logo2 from './img/register.svg';
import mainlogo from './img/image-removebg-preview.png';
import './css/signupandsignin.css'

function SignupSignin() {


  const [signupmode, changeSignupMode] = useState('');
  const containerClass = 'container ' + signupmode;
  const ChangeToSignupMode = () => {
    changeSignupMode('sign-up-mode');
  }

  const ChangeToSignInMode = () => {
    changeSignupMode('');
  }

  return (
    <>

      <div className={containerClass}>

        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input /*type="email"*/ placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input /*type="password"*/ placeholder="Password" required />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social_icons">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-microsoft"></i></a>
                <a href="#"><i className="fa-brands fa-google"></i></a>
              </div>

            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input /*type="text"*/ placeholder="First Name" required />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input /*type="text"*/ placeholder="Last Name" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input /*type="email"*/ placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input /*type="password"*/ placeholder="Password" required />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social_icons">
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-microsoft"></i></a>
                <a href="#"><i className="fa-brands fa-google"></i></a>
              </div>

            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <div className="mainlogo"><img src={mainlogo}></img></div>
              <h3>New here ?</h3>
              <p>

              </p>
              <button className="btn transparent" onClick={ChangeToSignupMode}>
                Sign up
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <div className="mainlogo"><img src={mainlogo}></img></div>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={ChangeToSignInMode}>
                Sign in
              </button>
            </div>
            <img src={logo2} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )

}
export default SignupSignin;