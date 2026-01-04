
import React from 'react'
import Button from './Button'

const Headingform = () => {
  return (
    <div className="w-full px-2 sm:px-4 ">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-3
          items-center
          justify-center
          bg-black/25
          p-3
          rounded-md
        "
      >
        {/* Pickup Location */}
        <input
          type="text"
          placeholder="Choose location"
          className="w-full outline-none border-b border-white p-2 bg-transparent text-white placeholder-white text-sm"
        />

        {/* Date */}
        <input
          type="date"
          className="w-full outline-none border-b border-white p-2 bg-transparent text-white placeholder-white text-sm"
        />

        {/* Time */}
        <input
          type="time"
          className="w-full outline-none border-b border-white p-2 bg-transparent text-white placeholder-white text-sm"
        />

        {/* Drop Location */}
        <input
          type="text"
          placeholder="Drop off location"
          className="w-full outline-none border-b border-white p-2 bg-transparent text-white placeholder-white text-sm"
        />

        {/* Button */}
        <div className="w-full sm:col-span-2 lg:col-span-4 mt-2 flex justify-center">
          <Button text="Send" />
        </div>
      </div>
    </div>
  )
}

export default Headingform
