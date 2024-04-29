import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import './forgetPass.css';
import Btn from '../../components/Btn';
import forget from '../../assets/signin.png';
import handleInputChange from './inputLabelNewPass';


function NewPass() {
    
  useEffect(() => {
    handleInputChange();
}, []);

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log('Password Changed!');
      navigate('/');
    } 
    // else {
    //   alert('Password did not match');
    // }
  };

  
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      event.target.setCustomValidity('Passwords do not match');
    } else {
      event.target.setCustomValidity('');
    }
  };
  return (
    <div className="forget-main">
      <div className="forget-img">
        <img src={forget} alt="" />
      </div>
      <div className="forget-txt">
        <div className="forget-form-box">
          <div className="forget-form-value">
            <form onSubmit={handleSubmit}>
              <h2 className="forget-logo">FASCO</h2>
              <h4 className="forget-h4">Enter Your New Password</h4>
              <span className="wrap-inputbox-otp">
                <div className="inputbox-otp">
                  <input
                    type="password"
                    id="passwordInput"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="passwordInput">New Password</label>
                </div>
                <div className="inputbox-otp">
                  <input
                    type="password"
                    id="ConfirmPasswordInput"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                   pattern={password}
                  />
                  <label htmlFor="ConfirmPasswordInput">Confirmation Password</label>
                </div>
              </span>
              <Btn btn="Submit" type="submit" />
            </form>
          </div>
        </div>
        <div className="terms-forget">
          <p>FASCO Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default NewPass;
    