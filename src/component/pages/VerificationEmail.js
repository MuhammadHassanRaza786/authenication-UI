
import React, { useState } from "react";
import mainlogo from './img/logo_5.png';
import './css/signupandsignin.css';
import resetimg from './img/resetimg.svg';

function VerificationEmail() {

  //validation code
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  

  const validate = (values)=>{
    let errors = {};
    if (!values.email) {
        errors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate({email});
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // If there are no errors, make the login request to the server
    }
  }
  //end here

  const [signupmode] = useState('');
  const containerClass = 'container ' + signupmode;

  return (
    <>

      <div className={containerClass}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Enter Email </h2>
      
              <div className="input-field">
              <i className="fa-solid fa-user"></i>
                <input type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} 
                placeholder="Verification Email"  />
              </div>
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="submit" value="Send Link" className="btn solid" />
            </form>
          
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <div className="mainlogo"><img src={mainlogo}></img></div>

            </div>
            <img id="resetimg" src={resetimg} className="image" alt="" />
          </div>

        </div>
      </div>
    </>
  )

}
export default VerificationEmail;