import React from 'react'
import Button from './Button'

const Headingform = () => {
  return (
    <div>
     <div className='flex items-center justify-center gap-10'>
        <div >
         <input type="text" name="" id="" placeholder='Choose  location' className='w-70 outline-none border-b border-white p-3' />
     </div>
        <div >
         <input type="date" name="" id="" placeholder='Select Date' className='w-70 outline-none border-b border-white p-3' />
     </div>
        <div >
         <input type="time" name="" id="" placeholder='Select time' className='w-70 outline-none border-b border-white p-3' />
     </div>
        <div >
         <input type="text" name="" id="" placeholder='Drop of  location' className='w-70 outline-none border-b border-white p-3' />
     </div>
     <div>
        <Button text={"send"}/>
     </div>
     
     </div>
    </div>
  )
}

export default Headingform
