import React, { useRef } from 'react'
import HomeNav from './Navbar/HomeNav'
import Heading from './Heading'
import Booknow from './Booknow'
import Team from './Team'
import Premium from './Premium'
import Testimonial from './Testimonial'
import HomeCarInfo from './HomeCarInfo'
import Location from './Location'
import Footer from './Footer'

const Home = () => {
  const heroRef = useRef(null)
  return (
    <div className='overflow-x-hidden bg-[#141A1C] relative'>
      <HomeNav heroRef={heroRef}/>
      <Heading ref={heroRef}/>
      <HomeCarInfo/>
      <Booknow/>
      <Team/>
      <Premium/>
      <Testimonial/>
      <Location/>
     <Footer/>
    </div>
  )
}

export default Home
