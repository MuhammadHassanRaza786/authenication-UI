
import './App.css';
import SignupSignin from './component/pages/SignupSignin';
import ForgetPassword from './component/pages/ForgetPassword';

import { LinkedInCallback } from 'react-linkedin-login-oauth2';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <ForgetPassword/>
    {/* <BrowserRouter>
      <Routes>
        <Route exact path="/linkedin" element={LinkedInCallback} />
        <Route path="/" element={<SignupSignin/>}/>
      </Routes>
    </BrowserRouter> */}
    {/* <SignupSignin/> */}
    </>
  );
}

export default App;
