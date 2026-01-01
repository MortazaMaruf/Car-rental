
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Pagination, Autoplay } from 'swiper/modules'
import TestimonialCard from './Testimonialcard'

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch('/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
