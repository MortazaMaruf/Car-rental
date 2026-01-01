import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdTimer } from "react-icons/io";
const Location = () => {
  return (
    <div className='w-11/12 mx-auto py-10'>
        <div className='flex items-center justify-between'>

            <div className='location flex items-center justify-center gap-2'>
                <IoLocationOutline color='#BFA37C' size={50}/>
                <div className='text-lg text-gray-400 tracking-wide leading-8'>
                    <h1>11 Rue de la Mutualite,</h1>
                    <h1>92400 paris</h1>
                </div>

        </div>
            <div className='phone flex items-center justify-center gap-2'>
                <TfiHeadphoneAlt color='#BFA37C' size={50}/>
                <div className='text-lg text-gray-400 tracking-wide leading-8'>
                    <h1>phone:(012)345 6789 0123</h1>
                    <h1>E-mail:luxe@exmaple.com</h1>
                </div>

        </div>
            <div className='time-table flex items-center justify-center gap-2'>
                <IoMdTimer color='#BFA37C' size={50}/>
                <div className='text-lg text-gray-400 tracking-wide leading-8'>
                    <h1>Mon-Sat 09:00-23:00;</h1>
                    <h1>sun is closed</h1>
                </div>

        </div>
       
        </div>
    </div>
  )
}

export default Location
