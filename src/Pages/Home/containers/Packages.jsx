import React from 'react'
import './packages.css'
import peaky from '../../../assets/peaky.png'
import Btn from '../../../components/Btn'

function Packages() {
  return (
    <div className="packages-m">
    <div className="packages-main">
        <div className="packages-img">
            <img src={peaky} alt="" />
        </div>
        <div className="packages-txt">
          <div className="pkgSub">
            <p className="title">Women Collection</p>
            <h1 className="heading-peaky">Peaky Blinders</h1>
            <p className="discription-title">DESCRIPTION</p>
            <p className="discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non repudiandae animi rerum optio nemo consequuntur. Reiciendis quos aspernatur temporibus at, placeat voluptate libero dignissimos nostrum. Accusantium qui rem quam omnis!</p>
            <p className="size">Size: <span className='size-property'>M</span></p>
            <p className="peaky-price">$100.<span className='peaky-price-sm' >00</span></p>
            <Btn btn="Buy Now" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Packages
