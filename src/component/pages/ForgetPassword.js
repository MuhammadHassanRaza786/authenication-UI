
import React, { useState } from "react";
import mainlogo from './img/logo_5.png';
import './css/signupandsignin.css';
import resetimg from './img/reset_img2.svg';

function SignupSignin() {

  //validation code
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  

  const validate = (values) => {
    let errors = {};
   
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 or more characters";
    } else if (!/\d/.test(values.password)) {
      errors.password = "Password must contain atleast 1 number";
    } else if (!/[!@#$%&?]/g.test(values.password)) {
      errors.password = "Password must contain atleast 1 special character";
    } else if (!/[A-Z]/g.test(values.password)) {
      errors.password = "Password must contain atleast 1 capital letter";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = "Confirm Password must be 8 or more characters";
    } else if (!/\d/.test(values.confirmPassword)) {
      errors.confirmPassword = "Confirm Password must contain atleast 1 number";
    } else if (!/[!@#$%&?]/g.test(values.confirmPassword)) {
      errors.confirmPassword = "Confirm Password must contain atleast 1 special character";
    } else if (!/[A-Z]/g.test(values.confirmPassword)) {
      errors.confirmPassword = "Confirm Password must contain atleast 1 capital letter";
    }

    return errors;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate({password, confirmPassword});
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
              <h2 className="title">Reset Password</h2>
      
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder="New Password"  />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                 placeholder="Confirm Password" />
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <input type="submit" value="Change" className="btn solid" />
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
export default SignupSignin;