import React from 'react'
import HeadingImage from '../Images/vehicle-list-title-img.jpg' 

const VehicleHeading = () => {
  return (
    <div className="relative w-full">
      <img src={HeadingImage} alt="Vehicle Heading" className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase text-center tracking-wide">
          Drive in Style with Our Top Cars
        </h1>
      </div>
    </div>
  )
}

export default VehicleHeading
