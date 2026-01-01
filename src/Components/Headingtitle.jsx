import React from 'react'
import Headingform from './Headingform'

const Headingtitle = () => {
  return (
    <div className='absolute top-10/18 left-[10%] '>
   <div className='text-5xl capitalize '>
       <h1 >Need to rent a luxury car? </h1>
      <h1 className='leading-20'>send a request</h1>
   </div>
      <h1 className='text-xl '>Complete the form below and we'll contact you as soon as possible.</h1>
      <div className='pt-10'>
        <Headingform/>
      </div>
    </div>
  )
}

export default Headingtitle
