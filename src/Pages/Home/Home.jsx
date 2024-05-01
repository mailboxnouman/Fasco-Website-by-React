import React from 'react'
import './home.css'
import Hero from './containers/Hero'
import Brand from './containers/Brand'
import Deals from './containers/Deals'
import Gap from '../../components/Gap'
import NewArrivals from './containers/NewArrivals'
import Packages from './containers/Packages'
import Services from './containers/Services'
import FollowUs from './containers/FollowUs'
import Reviews from './containers/Reviews'
import Subscribe from './containers/Subscribe'
import Footer from './containers/Footer'

function Home() {
  return (
    <div>
     <Hero />
     <Brand />
     <Gap />
     <Deals />
     <Gap />
     <NewArrivals />
     <Gap />
     <Packages />
     <Services />
     <Gap />
     <FollowUs />
     <Gap />
     <Reviews />
     <Subscribe />
     <Footer />
    

    </div>
  )
}

export default Home
