import React from 'react'
import './subscribe.css'
import Btn from '../../../components/Btn'
import subscribe1 from '../../../assets/subscribe (1).png'
import subscribe2 from '../../../assets/subscribe (2).png'

function Subscribe() {
    return (
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
      )
}

export default Subscribe
