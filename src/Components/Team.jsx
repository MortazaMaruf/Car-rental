import React from 'react'
import img1 from '../Images/h1-team-img-1.jpg'
import img2 from '../Images/h1-team-img-2.jpg'
import img3 from '../Images/h1-team-img-3.jpg'
import { MdOutlinePhone } from "react-icons/md";

const Team = () => {
    return (
        <div className='bg-[#0C1315] py-10'>
        <div className='w-11/12 mx-auto my-20'>
            <div className='border-b border-b-gray-700 pb-10'>
                <h1 className='text-4xl leading-12 mb-5 '>Our Proffesional Chauffeurs</h1>
                <span className='text-[#BFA37C] tracking-[5px] uppercase text-sm'>meet our team</span>
            </div>
            <div className='flex items-center justify-center pt-10  gap-20'>
               <div>
                 <img src={img1} alt=""  className='w-85 hover:rounded-3xl duration-100'/>
                 <div >
                 

                    <h1 className=' pt-3 text-3xl'>marco watkivi</h1>
                    <div className='flex items-center justify-start gap-3 pt-3 text-[#BFA37C] cursor-pointer'>
                        <MdOutlinePhone />
                        <span className='flex items-center justi-center gap-5'>+ 1234  <span>5678</span> <span>901</span></span>
                        
                    </div>
                 </div>
               </div>
               <div>
                 <img src={img2} alt=""  className='w-85 hover:rounded-3xl duration-100'/>
                 <div >
                 

                    <h1 className=' pt-3 text-3xl'>Marily Sulli</h1>
                    <div className='flex items-center justify-start gap-3 pt-3 text-[#BFA37C] cursor-pointer '>
                        <MdOutlinePhone />
                        <span className='flex items-center justi-center gap-5 '>+ 2345  <span>6789</span> <span>012</span></span>
                        
                    </div>
                 </div>
               </div>
               <div>
                 <img src={img3} alt=""  className='w-85 hover:rounded-3xl duration-100'/>
                 <div >
                 

                    <h1 className=' pt-3 text-3xl'>Zakary Tapun</h1>
                    <div className='flex items-center justify-start gap-3 pt-3 text-[#BFA37C] cursor-pointer'>
                        <MdOutlinePhone />
                        <span className='flex items-center justi-center gap-5'>+ 3456  <span>7890</span> <span>123</span></span>
                        
                    </div>
                 </div>
               </div>
                
                
                
            </div>
        </div>
        </div>
    )
}

export default Team
