import React from 'react'
import Headingform from './Headingform'

const Headingtitle = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 sm:space-y-3 lg:space-y-6 text-center">

      {/* Main Title */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize leading-snug text-white max-w-3xl mt-20">
        <h1>Need to rent a luxury car?</h1>
        <h1 className="leading-tight">Send a request</h1>
      </div>

      {/* Subtitle */}
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 max-w-2xl mt-5">
        Complete the form below and we'll contact you as soon as possible.
      </h2>

      {/* Form */}
      <div className="w-full max-w-6xl">
        <Headingform />
      </div>

    </div>
  )
}

export default Headingtitle
