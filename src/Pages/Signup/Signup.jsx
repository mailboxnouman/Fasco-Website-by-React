import React, { useEffect } from 'react'
import { Outlet, Link} from "react-router-dom";

import './signup.css'
import Btn from '../../components/Btn'
import signup from '../../assets/signin.png'
import gmail from '../../assets/gmail.png'
import email from '../../assets/email.png'
import handleInputChange from './inputLabelSignup';
import Password from './Password';

function Signup() {

  useEffect(() => {
    handleInputChange();
}, []);

const handleSubmit = (event) => {
  event.preventDefault(); 
  console.log('Acc Created!');
};

  return (
    <div className="signup-main">
      <div className="signup-img">
        <img src={signup} alt="" />
      </div>
      <div className="signup-txt">
        <div className="signup-form-box">
          <div className="signup-form-value">
            <form  onSubmit={handleSubmit}>
              <h2 className='signup-logo'>FASCO</h2>
              <h4 className='signup-h4'>Create Account</h4>
             <span className="wrap-signup-withMail">
             <Link to="/" className='signup-mail-link'>
              <span className="signup-withMail">
              <p> <img src={gmail} alt="" /> Sign Up With Google</p>
              </span>
              </Link>
              <Link to="/" className='signup-mail-link'>
              <span className="signup-withMail">
              
               <p><img src={email} alt="" /> Sign Up With Email</p>
            
              </span>
              </Link>
              </span>
              <div className="signup-separator">
                <p>- OR -</p>
              </div>
              <span className="wrap-inputbox-signup">

             
              <div className="inputbox-signup">
              <input type="text" id="textInput" required />
                <label htmlFor="textInput">First Name</label>
              </div>
              <div className="inputbox-signup">
              <input type="text" id="textInput" required />
                <label htmlFor="textInput" id='helo'>Last Name</label>
              </div>
              <div className="inputbox-signup">
                <input type="email" id="emailInput" required />
                <label htmlFor="emailInput">Email Adress</label>
              </div>
              <div className="inputbox-signup">
                <input type="tel" id="phoneInput" required />
                <label htmlFor="phoneInput">Phone Number</label>
              </div>
              <Password />
              </span>
             
             <Btn btn="Create Account" type='submit' />
              
             <div className="haveAcc-signup">
              <p>Already have an account?</p><Link to="/signin">  <label >Login</label> </Link>

              </div>
            </form>
          </div>
        </div>
        {/* <Link to="/signup" className='signup-register-link'><Btn btn="Register Now" className='registerBtn'  /></Link> */}
              
        <div className="terms-signup">
                <p>FASCO Terms & Codnitions</p>
              </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Signup
