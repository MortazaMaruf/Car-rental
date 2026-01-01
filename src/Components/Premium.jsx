import React from 'react'
import img1 from '../Images/h1-img-6.jpg'
import img2 from '../Images/h1-img-7.jpg'
import { FaPlus } from "react-icons/fa6";

const Premium = () => {
  return (
    <div className='w-11/12 mx-auto my-20 '>
            <div className='flex items-center justify-between'>
                <div className='left flex items-center justify-center gap-15'>
                    <img src={img1} alt="" className='w-100 hover:rounded-4xl transition-all duration-100' />
                    <img src={img2} alt="" className='w-100 hover:rounded-4xl transition-all duration-100' />
                </div>
                <div className='right '>
                    <h1 className='text-4xl leading-12 mb-5 '>Premium car Rental</h1>
                    <span className='text-[#BFA37C] tracking-[5px] uppercase text-sm'>only the best</span>
                    <p className='text-gray-400 text-lg mt-10'>Praesent elementum facilisis leo vel fringilla est. Vest bulum lectus a <br /> urise ultrices eros in cursus turpi uto.</p>
                    <div className='flex items-center justify-between'>
                       <div>
                         <div className=' mt-10 flex justify-center font-semibold '>
                     <span className='text-6xl '>21</span> <FaPlus size={30}/>
                   
                       </div>
                         <div>
                        <h1 className='mt-5 text-gray-400 text-lg'>Years of experience</h1>
                     </div>
                     
                    </div>
                    
                    <div className='w-60 mt-10 '>
                     <span className='text-6xl font-semibold'>157</span> <span className='text-4xl'> k</span>
                     <h1 className='mt-5 text-gray-400 text-lg'>Satisfied clients</h1>
                    </div>
                    </div>
                </div>
                

            </div>

        </div>
  )
}

export default Premium
