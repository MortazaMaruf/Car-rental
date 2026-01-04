
import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div className="bg-[#0C1315] py-10 sm:py-15 lg:py-20">
      <div className="w-11/12 mx-auto text-center lg:text-left">

        {/* Heading */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white mb-10">
          <h1>We strive to meet the needs</h1>
          <h1>of our clients and we value their</h1>
          <h1>opinions about our work</h1>
        </div>

        {/* Slider */}
        <div className="flex items-center justify-center">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
