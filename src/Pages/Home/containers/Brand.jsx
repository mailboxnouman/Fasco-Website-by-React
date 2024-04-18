import React from 'react'
import '../containers/brand.css'
import brandImg0 from '../../../assets//logo-2.png'
import brandImg1 from '../../../assets//logo-3.png'
import brandImg2 from '../../../assets//logo-1.png'
import brandImg3 from '../../../assets//logo-4.png'
import brandImg4 from '../../../assets//logo-0.png'


function Brand() {
  return (
    <>
    <div className='brand'>
      <div className="brand-img">
        <img src={brandImg0} alt="" />
      </div>
      <div className="brand-img">
        <img src={brandImg1} alt="" />
      </div>
      <div className="brand-img">
        <img src={brandImg2} alt="" />
      </div>
      <div className="brand-img">
        <img src={brandImg3} alt="" />
      </div>
      <div className="brand-img">
        <img src={brandImg4} alt="" />
      </div>
    </div>
    <div className="shadow"></div>
  
    </>
    
    
  )
}

export default Brand
