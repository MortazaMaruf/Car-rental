
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdTimer } from "react-icons/io";

const Location = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-10">

        {/* Location */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
          <IoLocationOutline color='#BFA37C' size={40} className="flex-shrink-0" />
          <div className="text-center sm:text-left text-sm sm:text-base md:text-lg text-gray-400 tracking-wide leading-6">
            <h1>11 Rue de la Mutualite,</h1>
            <h1>92400 Paris</h1>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
          <TfiHeadphoneAlt color='#BFA37C' size={40} className="flex-shrink-0" />
          <div className="text-center sm:text-left text-sm sm:text-base md:text-lg text-gray-400 tracking-wide leading-6">
            <h1>Phone: (012) 345 6789 0123</h1>
            <h1>E-mail: luxe@example.com</h1>
          </div>
        </div>

        {/* Time Table */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
          <IoMdTimer color='#BFA37C' size={40} className="flex-shrink-0" />
          <div className="text-center sm:text-left text-sm sm:text-base md:text-lg text-gray-400 tracking-wide leading-6">
            <h1>Mon-Sat 09:00 - 23:00</h1>
            <h1>Sun is closed</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Location
