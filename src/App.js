
import './App.css';
import SignupSignin from './component/pages/SignupSignin';
import ForgetPassword from './component/pages/ForgetPassword';

import { LinkedInCallback } from 'react-linkedin-login-oauth2';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerificationEmail from './component/pages/VerificationEmail';
import ConfirmPin from './component/pages/ConfirmPin';

function App() {
  return (
    <>
    {/* <ForgetPassword/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route exact path="/linkedin" element={LinkedInCallback} />
        <Route path="/" element={<SignupSignin/>}/>
      </Routes>
    </BrowserRouter> */}
    {/* <SignupSignin/> */}
    <VerificationEmail></VerificationEmail>
    {/* <ConfirmPin></ConfirmPin> */}
    </>
  );
}

export default App;
