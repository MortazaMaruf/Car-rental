
import React from 'react'
import { IoMdStar } from "react-icons/io";

const CarCard = ({ title, img, type }) => {
  return (
    <div className="w-full cursor-pointer py-5 flex flex-col items-center">

      {/* Image Container */}
      <div className="relative w-full overflow-hidden group rounded-lg">
        <img
          src={img}
          alt={title}
          className="w-full h-[60vh] sm:h-[50vh] md:h-[45vh] lg:h-[40vh] object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 text-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">{type}</h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-[#BFA37C] mb-2">
              <sub className="text-sm text-white">from</sub> 
              <sup className="text-sm">$</sup>180 / <span className="text-sm">per hour</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-white text-center">{title}</h1>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-yellow-400 mt-2">
        {[...Array(5)].map((_, index) => (
          <IoMdStar key={index} color='#BFA37C' size={18} />
        ))}
      </div>

    </div>
  )
}

export default CarCard
