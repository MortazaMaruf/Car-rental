
import React from 'react'
import img1 from '../Images/h1-img-6.jpg'
import img2 from '../Images/h1-img-7.jpg'
import { FaPlus } from "react-icons/fa6";

const Premium = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20">

        {/* Left Images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 flex-1">
          <img
            src={img1}
            alt="Premium 1"
            className="w-full sm:w-1/2 lg:w-70 rounded-lg hover:rounded-2xl transition-all duration-300"
          />
          <img
            src={img2}
            alt="Premium 2"
            className="w-full sm:w-1/2 lg:w-70 rounded-lg hover:rounded-2xl transition-all duration-300"
          />
        </div>

        {/* Right Text / Stats */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-snug mb-3 text-white">
            Premium Car Rental
          </h1>
          <span className="text-[#BFA37C] tracking-widest uppercase text-sm">Only the best</span>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-6">
            Praesent elementum facilisis leo vel fringilla est. Vestibulum lectus a 
            urise ultrices eros in cursus turpis uto.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-6">
            
            {/* Years of Experience */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-5xl sm:text-6xl">21</span>
                <FaPlus size={25} />
              </div>
              <h2 className="mt-2 text-gray-400 text-sm sm:text-lg">Years of experience</h2>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 font-semibold">
                <span className="text-5xl sm:text-6xl">157</span>
                <span className="text-3xl sm:text-4xl">k</span>
              </div>
              <h2 className="mt-2 text-gray-400 text-sm sm:text-lg">Satisfied clients</h2>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Premium
