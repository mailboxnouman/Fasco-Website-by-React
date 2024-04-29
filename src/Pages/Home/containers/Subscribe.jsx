import React, { useEffect } from 'react';
import './subscribe.css';
import Btn from '../../../components/Btn';
import subscribe1 from '../../../assets/subscribe (1).png';
import subscribe2 from '../../../assets/subscribe (2).png';

function Subscribe() {
  useEffect(() => {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.top <= window.innerHeight
        );
      }
      
      function addAnimationClass() {
        var img1 = document.querySelector('.subscribe-img1 img');
        var img2 = document.querySelector('.subscribe-img2 img');
      
        if (isInViewport(img1)) {
          img1.classList.add('animate');
        } else {
          img1.classList.remove('animate');
        }
      
        if (isInViewport(img2)) {
          img2.classList.add('animate');
        } else {
          img2.classList.remove('animate');
        }
      }
      
      window.addEventListener('scroll', addAnimationClass);
      
      return () => {
        window.removeEventListener('scroll', addAnimationClass);
      };
  }, []); 

  return (
    <div className='wrap-subscribe-main'>
    <div className="subscribe-main">
      <div className="subscribe-img1">
        <img src={subscribe1} alt="" />
      </div>
      <div className="subscribe-txt">
        <span className="subscribeTxtBox">
          <h1 className='head1-subscribe'>Subscribe To Our Newsletter</h1>
          <p className='para1-subscribe'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
          <p className='email-subscribe'>michael@ymail.com </p>
        </span>
        <Btn btn="Subscribe Now" />
      </div>
      <div className="subscribe-img2">
        <img src={subscribe2} alt="" />
      </div>
    </div>
    </div>
  );
}

export default Subscribe;
