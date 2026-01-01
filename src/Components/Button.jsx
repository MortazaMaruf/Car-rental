import React from 'react'
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";

const Button = ({text}) => {
  return (
    <div className='group border border-[#BFA37C] px-10 py-3  flex items-center justify-center gap-4 cursor-pointer'>
        <div className='group-hover:hidden transition-all group-hover:duration-500'>
            <GoPlus  size={20}/>
        </div>
        <div className=' hidden group-hover:flex  transition-all group-hover:duration-500'>
            <HiMinusSmall size={20}/>
        </div>
        <button className='uppercase text-md cursor-pointer' >
            {text}
        </button>
    </div>
  )
}

export default Button
