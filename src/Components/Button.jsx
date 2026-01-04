
import React from 'react'
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

const Button = ({ text, onclick }) => {
  return (
    <div
      onClick={onclick}
      className="
        group 
        border border-[#BFA37C] 
        px-6 sm:px-8 md:px-10 
        py-2 sm:py-3
        flex items-center justify-center gap-3 sm:gap-4
        cursor-pointer
        transition-all duration-300
      "
    >
      {/* Plus Icon */}
      <div className="group-hover:hidden transition-all duration-300">
        <GoPlus size={20} />
      </div>

      {/* Minus Icon */}
      <div className="hidden group-hover:flex transition-all duration-300">
        <HiMinusSmall size={20} />
      </div>

      {/* Text */}
      <button className="uppercase text-sm sm:text-md md:text-md cursor-pointer">
        {text}
      </button>
    </div>
  )
}

export default Button
