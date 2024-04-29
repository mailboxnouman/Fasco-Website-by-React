import React, { useEffect } from 'react'
import { Outlet, Link, useNavigate} from "react-router-dom";


import './forgetPass.css'
import Btn from '../../components/Btn'
import forget from '../../assets/signin.png'
import handleInputChange from './inputLabelForget';

function ForgetPass() {
  const navigate = useNavigate()

  useEffect(() => {
    handleInputChange();
}, []);

const handleSubmit = (event) => {
  event.preventDefault(); 
  console.log('Confirmation Code Send!');
  navigate('/otp')

//   redirect to set pass page
};

  return (
    <div className="forget-main">
      <div className="forget-img">
        <img src={forget} alt="" />
      </div>
      <div className="forget-txt">
        <div className="forget-form-box">
          <div className="forget-form-value">
            <form  onSubmit={handleSubmit}>
              <h2 className='forget-logo'>FASCO</h2>
              <h4 className='forget-h4'>Forget Password</h4>
             
              <span className="wrap-inputbox-forget">

             
              <div className="inputbox-forget">
              <input type="text" id="textInput" required />
                <label htmlFor="textInput">First Name</label>
              </div>
              <div className="inputbox-forget">
              <input type="text" id="textInput" required />
                <label htmlFor="textInput" id='helo'>Last Name</label>
              </div>
              <div className="inputbox-forget">
                <input type="email" id="emailInput" required />
                <label htmlFor="emailInput">Email Adress</label>
              </div>
              <div className="inputbox-forget">
                <input type="tel" id="phoneInput" required />
                <label htmlFor="phoneInput">Phone Number</label>
              </div>
              </span>
             
             <Btn btn="Send Confirmation Code" type='submit' />
              
             <div className="haveAcc-forget">
              <p>Already have an account?</p><Link to="/signin">  <label >Login</label> </Link>

              </div>
            </form>
          </div>
        </div>
        {/* <Link to="/forget" className='forget-register-link'><Btn btn="Register Now" className='registerBtn'  /></Link> */}
              
        <div className="terms-forget">
                <p>FASCO Terms & Codnitions</p>
              </div>
      </div>
      <Outlet />
    </div>
  )
}

export default ForgetPass
