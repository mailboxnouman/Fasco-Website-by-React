import React from 'react'
import '../containers/services.css'
import services from '../../../assets/services.png'
import features from '../../../assets/features.png'

function Services() {
  return (
    <>
    <div className='services'>
      <div className="services-img">
       <sapn className="servicesImg"> <img src={services} alt="" /> </sapn>
       <sapn className="featuresImg"> <img src={features} alt="" /> </sapn>
      </div>
      
    </div>
    <div className="shadow"></div>
  
    </>
    
    
  )
}

export default Services
