import React, { useEffect, useState } from 'react'
import Testimonialcard from './Testimonialcard'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
    // const [testimonials,setTestimonials] = useState([]);
    // useEffect (()=> {
    //     fetch('../../public/testimonials.json')
    //     .then(res => res.json())
    //     .then(data=>setTestimonials(data))
    // },[])
  return (
  <div className='bg-[#0C1315] py-15'>
      <div className='w-11/12 mx-auto'>
      <div className='text-5xl leading-15'>
        <h1>We trive to meet the needs</h1>
      <h1>of our clients and we value their</h1>
      <h1>opinions about our work</h1>
      </div>
    <div className='flex items-center justify-center'>
        {/* {testimonials.map((item, index) => (
        <Testimonialcard key={index} data={item} />
      ))} */}
      <TestimonialSlider/>
    </div>
    </div>
  </div>
  )
}

export default Testimonial
