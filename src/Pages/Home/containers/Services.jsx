import React from 'react'
import '../containers/services.css'
import servicesImg1 from '../../../assets/services (1).png'
import servicesImg2 from '../../../assets/services (2).png'
import servicesImg3 from '../../../assets/services (3).png'
import servicesImg4 from '../../../assets/services (4).png'


function Services() {
  return (
    <>
    <div className="services">
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={servicesImg1}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg2}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg3}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg4}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg1}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg2}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg3}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg4}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg1}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg2}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg3}  alt="" />
        </div>
        <div className="slide">
          <img src={servicesImg4}  alt="" />
        </div>
      </div>
    </div>
    </div>

    <div className="shadow"></div>
    
    </>
    
    
  )
}

export default Services
