import React from 'react'
import './shop.css'
import Collection from './containers/Collection'
import Gap from '../../components/Gap'
import Packages from '../Home/containers/Packages'
import Services from '../Home/containers/Services'
import FollowUs from '../Home/containers/FollowUs'
import Subscribe from '../Home/containers/Subscribe'
import Footer from '../Home/containers/Footer'


function Shop() {
  return (
    <div>
      <Collection />
      <Gap />
     <Packages />
     <Services />
     <Gap />
     <FollowUs />
     <Gap />
     <Subscribe />
     <Footer />
    </div>
  )
}

export default Shop
