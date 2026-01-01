import React from 'react'

import { IoMdStar } from "react-icons/io";
const CarCard = ({title,img,type}) => {
  return (
    <div className='py-5 cursor-pointer  '>
      <div className=''>
        <div className='flex items-center justify-center gap-5 flex-col'>
            <div className='relative overflow-hidden group transition-all dealy-150 duration-500'>
        <img  src={img} alt="" className='w-[25vw] h-[65vh] hover:rounded-2xl  '/>
        <div className=' hidden group-hover:block  '>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black/50 w-full h-full'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-3xl font-light'>{type}</h1>
          <div className='flex  justify-center py-5'>
           
            <h1 className='text-3xl text-[#BFA37C]'><sub className='text-xl text-white'>from</sub><sup className='text-xl'>$</sup>180/ <span className='text-xl tracking-tighter'>per hour</span> </h1>
          </div>
            <p className='text-gray-300 text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      </div>
        </div>
        <div>
            <h1 className='text-2xl'>{title}</h1>
        </div>
        <div className='flex items-center justify-center gap-2 text-xl'>
            {[...Array(5)].map((_,index) => (

            <IoMdStar key={index} color='#BFA37C' />
            ))}
        </div>
        </div>

      </div>
      
    </div>
  )
}

export default CarCard
