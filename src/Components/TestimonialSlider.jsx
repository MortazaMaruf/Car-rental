
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
      slidesPerView={1} // default for mobile
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },   // sm
        768: { slidesPerView: 2, spaceBetween: 25 },   // md
        1024: { slidesPerView: 3, spaceBetween: 30 },  // lg
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full"
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
