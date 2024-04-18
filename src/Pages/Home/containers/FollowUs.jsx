import React from 'react'
import './followUs.css'
import followUs1 from '../../../assets/followUs (1).png'
import followUs2 from '../../../assets/followUs (2).png'
import followUs3 from '../../../assets/followUs (3).png'
import followUs4 from '../../../assets/followUs (4).png'
import followUs5 from '../../../assets/followUs (5).png'
import followUs6 from '../../../assets/followUs (6).png'
import followUs7 from '../../../assets/followUs (7).png'

function FollowUs() {
     return (
    <div className="followUs-main">
        <h1 className='head1-followUs'>Follow Us On Instagram</h1>
        <p className='para1-followUs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        <div className="img-followUs">
          <div><img src={followUs1} alt="" /></div>
          <div><img src={followUs2} alt="" /></div>
          <div><img src={followUs3} alt="" /></div>
          <div><img src={followUs4} alt="" /></div>
          <div><img src={followUs5} alt="" /></div>
          <div><img src={followUs6} alt="" /></div>
          <div><img src={followUs7} alt="" /></div>
        </div>
       
    </div>
  )
}

   

export default FollowUs
