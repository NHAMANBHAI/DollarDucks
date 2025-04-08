

import React from 'react'
import PlansPricing from './Pricing'
import Services from './Services'
import WhoWeServe from './WhoWeServe'
import Preloader from '../Components/Preloader'
import FrontSlider from '../Components/frontslider'


const Home = () => {
  return (
   <>
   <Preloader/>
   <FrontSlider/>
   <PlansPricing/>
   <Services/>
   <WhoWeServe/>
   </>
  )
}

export default Home
