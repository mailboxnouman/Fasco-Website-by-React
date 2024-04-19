import React, { useEffect } from 'react'
import { Outlet, Link} from "react-router-dom";

import './signin.css'
import Btn from '../../components/Btn'
import signin from '../../assets/signin.png'
import gmail from '../../assets/gmail.png'
import email from '../../assets/email.png'
import handleInputChange from './inputLabel';

function Login() {

  useEffect(() => {
    handleInputChange();
}, []);

const handleSubmit = (event) => {
  event.preventDefault(); 
  console.log('Form submitted!');
};

  return (
    <div className="signin-main">
      <div className="signin-img">
        <img src={signin} alt="" />
      </div>
      <div className="signin-txt">
        <div className="form-box">
          <div className="form-value">
            <form  onSubmit={handleSubmit}>
              <h2 className='signin-logo'>FASCO</h2>
              <h4 className='signin-h4'>Sign In To FASCO</h4>
             <Link to="/" >
              <span className="signup-withMail">
              <p> <img src={gmail} alt="" /> Sign Up With Google</p>
              </span>
              </Link>
              <Link to="/" >
              <span className="signup-withMail">
              
               <p><img src={email} alt="" /> Sign Up With Email</p>
            
              </span>
              </Link>
              
              <div className="signin-separator">
                <p>- OR -</p>
              </div>
              <div className="inputbox">
                <input type="email" id="emailInput" required />
                <label htmlFor="emailInput">Email</label>
              </div>
              <div className="inputbox">
                <input type="password" id="passwordInput" required />
                <label htmlFor="passwordInput">Password</label>
              </div>
             <Btn btn="Sign In" type='submit' />
              
              
            </form>
          </div>
        </div>
        <Link to="/"><Btn btn="Register Now" className='registerBtn'  /></Link>
              <div className="forget">
              <Link to="/">  <label >Forget Password</label> </Link>

              </div>
        <div className="terms">
                <p>FASCO Terms & Codnitions</p>
              </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Login
