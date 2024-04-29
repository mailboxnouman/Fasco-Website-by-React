import React from 'react'
import { Outlet, Link, useNavigate} from "react-router-dom";

import './forgetPass.css'
import Btn from '../../components/Btn'
import forget from '../../assets/signin.png'

function Otp() {

  const navigate = useNavigate()


const handleSubmit = (event) => {


  event.preventDefault(); 
  console.log('Confirmation code send!');
  navigate('/NewPass')
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
              <h4 className='forget-h4'>Enter The Confirmation Code</h4>
             
              <span className="wrap-inputbox-otp">
              <div className="inputbox-otp">
              <input type="text" id="textInput" required />
                <label htmlFor="textInput">Confirmation Code</label>
              </div>
              </span>
             
             <Btn btn="Recover Account" type='submit' />
              
             <div className="haveAcc-forget">
              <p>Didn’t receive Confirmation Code?</p><Link to="/forget">  <label >Resend Now</label> </Link>

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

export default Otp
