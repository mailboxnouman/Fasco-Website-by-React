import React from 'react'
import { FaStar } from 'react-icons/fa';
import './card.css'

function Card(props) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-txt">
            <div className="heading-review">
               <div className="heading"> <h1>{props.heading}</h1> </div>
               <div className="reviewStar">
                 <FaStar className="star filled" />
                 <FaStar className="star filled" />
                 <FaStar className="star filled" />
                 <FaStar className="star filled" />
                 <FaStar className="star " />
                  </div>
            </div>
            <p className="brandName">{props.brandName}</p>
            <p className="reviewCount">({props.reviewCount}) Customer Reviews</p>
            <div className="price-quantity">
               <div className="price"> <p>{props.price}</p></div>
                <div className="quantity"><p>{props.quantity}</p></div>
            </div>
        </div>
    </div>
  )
}

export default Card
