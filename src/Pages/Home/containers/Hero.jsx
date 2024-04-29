import React from 'react'
  import {  useNavigate } from "react-router-dom";
import '../containers/hero.css'
import heroLeft from '../../../assets/image 2 28.png'
import heroRight from '../../../assets/image 227.png'
import heroSubUp from '../../../assets/images-1.png'
import heroSubDown from '../../../assets/images.png'
import Btn from '../../../components/Btn'


function Hero() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/signin')
  };
  return (
    <div className='hero-main'>

      <div className="hero-sub">
        <img src={heroLeft} alt="" />
      </div>
      <div className="hero-sub">
        <div className="hero-sub-sub">
          <img src={heroSubUp} alt="" />
        </div>
        <div className="hero-sub-subTxt">
          <span className="ultimate">ULTIMATE</span>
          <span className="sale">SALE</span>
          <span className="newCol">NEW COLLECTION</span>
          <Btn btn="SHOP NOW" type='submit' onClick={handleSubmit}/>
        </div>
        <div className="hero-sub-sub">
          <img src={heroSubDown} alt="" />
        </div>
      </div>
      <div className="hero-sub">
        <img src={heroRight} alt="" />
      </div>
    </div>

  )
}

export default Hero
