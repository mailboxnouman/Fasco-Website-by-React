import React from 'react'
import './newArrivals.css'
import Btn from '../../../components/Btn'
import Card from '../../../components/Card'
import card1 from '../../../assets/card 1.png'
import card2 from '../../../assets/card 2.png'
import card3 from '../../../assets/card 3.png'
import card4 from '../../../assets/card 4.png'
import card5 from '../../../assets/card 5.png'
import card6 from '../../../assets/card 6.png'


function NewArrivals() {
  return (
    <div className="newArrivals-main" id='newArrivals'>
        <h1 className='head1'>New Arrivals</h1>
        <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        <div className="newArrivals-catg">
            <Btn btn="Men’s Fashion" />
            <Btn btn="Women’s Fashion" />
            <Btn btn="Women Accessories"/>
            <Btn btn="Men Accessories" />
            <Btn btn="Discount Deals" />
        </div>
        <div className="newArrivals-card">
            <Card img={card1} heading="Shiny Dress" brandName="Al Karam" reviewCount="15k" price="$19.99" quantity="Almost Sold Out" />
            <Card img={card2} heading="Long Dress" brandName="Khadi" reviewCount="25k" price="$19.99" quantity="Almost Sold Out" />
            <Card img={card3} heading="Full Sweater" brandName="Bonanza" reviewCount="66k" price="$19.99" quantity="Almost Sold Out" />
            <Card img={card4} heading="White Dress" brandName="Junaid Jamshed" reviewCount="145k" price="$19.99" quantity="Almost Sold Out" />
            <Card img={card5} heading="Colorful Dress" brandName="Elegant Apparel" reviewCount="20k" price="$19.99" quantity="Almost Sold Out" />
            <Card img={card6} heading="White Shirt" brandName="Outfitters" reviewCount="84k" price="$19.99" quantity="Almost Sold Out" />
            
        </div>
       <span className="last-btn">
       <Btn btn="View More" />
        </span> 
    </div>
  )
}

export default NewArrivals
