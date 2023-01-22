import React, { useState } from "react";
import logo from './img/logo.svg';
import logo2 from './img/register.svg';

function SignupSignin(){

   
    const [signupmode,changeSignupMode] = useState('');
    const containerClass = 'container ' + signupmode;
    const ChangeToSignupMode=()=>{
        changeSignupMode('sign-up-mode');
    }

    const ChangeToSignInMode=()=>{
        changeSignupMode('');
    }
    
return(
    <>
        <div className={containerClass}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
 
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Number" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
         
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
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