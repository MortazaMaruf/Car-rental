import React from 'react'
import HeadingImage from '../Images/vehicle-list-title-img.jpg' 

const VehicleHeading = () => {
  return (
    <div>
        <div className=' relative  '>
        <img src={HeadingImage} alt="" />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 w-full h-full '>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
             <h1 className='text-5xl capitalize tracking-widest'>Drive in Style with Our Top Cars
</h1>
        </div>
        </div>
    
          </div>
      
    </div>
  )
}

export default VehicleHeading
