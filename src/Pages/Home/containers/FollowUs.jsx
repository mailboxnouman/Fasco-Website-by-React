import React, { useState, useEffect } from 'react';
import './followUs.css'
import followUs1 from '../../../assets/followUs (1).png'
import followUs2 from '../../../assets/followUs (2).png'
import followUs3 from '../../../assets/followUs (3).png'
import followUs4 from '../../../assets/followUs (4).png'
import followUs5 from '../../../assets/followUs (5).png'
import followUs6 from '../../../assets/followUs (6).png'
import followUs7 from '../../../assets/followUs (7).png'

function FollowUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 3000); // Change the duration for your desired fade transition speed

    return () => clearInterval(interval);
  }, []);
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
        <div className="image-container">
          <img src={followUs1} alt="" style={{ opacity: currentImageIndex === 0 ? 1 : 0 }} />
          <img src={followUs2} alt="" style={{ opacity: currentImageIndex === 1 ? 1 : 0 }} />
          <img src={followUs3} alt="" style={{ opacity: currentImageIndex === 2 ? 1 : 0 }} />
          <img src={followUs4} alt="" style={{ opacity: currentImageIndex === 3 ? 1 : 0 }} />
          <img src={followUs5} alt="" style={{ opacity: currentImageIndex === 4 ? 1 : 0 }} />
          <img src={followUs6} alt="" style={{ opacity: currentImageIndex === 5 ? 1 : 0 }} />
          <img src={followUs7} alt="" style={{ opacity: currentImageIndex === 6 ? 1 : 0 }} />
        </div>
       
    </div>
  )
}

   

export default FollowUs

  
