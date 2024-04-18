import React from 'react'
import './reviews.css'
import Deck from './Deck'
function Reviews() {
    return (
        <div className="reviews-main">
            <h1 className='head1-reviews'>This Is What Our Customers Say</h1>
            <p className='para1-reviews'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
            <div className="carrosel-reviews">
                <Deck />
            </div>
           
        </div>
      )
      
}

export default Reviews
