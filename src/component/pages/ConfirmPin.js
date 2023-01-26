
import React, { useState } from "react";
import mainlogo from './img/logo_5.png';
import './css/signupandsignin.css';
import confirmpin from './img/confirmpin.svg';

function ConfirmPin() {

  //validation code
  const[ pin, setPin] =useState('');
  const [errors, setErrors] = useState({});
 
  

  const validate = (values)=>{
    let errors = {};
    if (!values.pin) {
        errors.pin = "Pin is required";
      } else if (values.pin.length !== 4) {
        errors.pin = "Pin must be 4 digits";
      } else if (!/^\d+$/.test(values.pin)) {
        errors.pin = "Pin must contain only numbers";
      }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate({pin});
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
              <h2 className="title">Verification PIN</h2>
      
              <div className="input-field">
              <i className="fa-solid fa-user"></i>
                <input type="text"
                value={pin} onChange={(e) => setPin(e.target.value)} 
                placeholder="Enter Pin "  />
              </div>
              {errors.pin && <p className="error">{errors.pin}</p>}
              <input type="submit" value="Verify" className="btn solid" />
            </form>
          
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <div className="mainlogo"><img src={mainlogo}></img></div>

            </div>
            <img id="confirmpin" src={confirmpin} className="image" alt="" />
          </div>

        </div>
      </div>
    </>
  )

}
export default ConfirmPin;