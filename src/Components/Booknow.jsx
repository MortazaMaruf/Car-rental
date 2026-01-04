
import React from 'react'
import Button from './Button'
import img1 from '../Images/h1-img-3.jpg'
import img2 from '../Images/h1-img-4.jpg'

const Booknow = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-snug mb-5 text-white">
            We Care Of Your Safety <br />
            And Convenience
          </h1>

          <span className="text-[#BFA37C] tracking-widest uppercase text-sm">Premium drivers</span>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-6">
            Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori <br />
            accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod <br />
            elementum nisi quis eleifend quam adipiscing vitae dipiscing.
          </p>

          <div className="mt-6 w-48 sm:w-60">
            <Button text="Book Now" />
          </div>
        </div>

        {/* Right Images */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          <img
            src={img1}
            alt="Book Now 1"
            className="w-full sm:w-1/2 lg:w-70 rounded-lg hover:rounded-2xl transition-all duration-300"
          />
          <img
            src={img2}
            alt="Book Now 2"
            className="w-full  sm:w-1/2 lg:w-70 rounded-lg hover:rounded-2xl transition-all duration-300"
          />
        </div>

      </div>
    </div>
  )
}

export default Booknow
