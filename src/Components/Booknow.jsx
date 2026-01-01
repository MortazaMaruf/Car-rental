import React from 'react'
import Button from './Button'
import img1 from '../Images/h1-img-3.jpg'
import img2 from '../Images/h1-img-4.jpg'

const Booknow = () => {
    return (
        <div className='w-11/12 mx-auto my-20 '>
            <div className='flex items-center justify-between'>
                <div className='left '>
                    <h1 className='text-4xl leading-12 mb-5 '>We Care Of Your Safety <br />
                        And Convenience</h1>
                    <span className='text-[#BFA37C] tracking-[5px] uppercase text-sm'>Premium drivers</span>
                    <p className='text-gray-400 text-lg mt-10'>Facilisi cras fermentum odio eu feugiat. In fermentum et sollicitudin ac ori <br />
                        accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Aenean euismod <br />elementum nisi quis eleifend quam adipiscing vitae dipiscing.</p><div className='w-60 mt-10'>
                        <Button text={"book now"} />
                    </div>
                </div>
                <div className='right flex items-center justify-center gap-15'>
                    <img src={img1} alt="" className='w-100 hover:rounded-4xl transition-all duration-100' />
                    <img src={img2} alt="" className='w-100 hover:rounded-4xl transition-all duration-100' />
                </div>

            </div>

        </div>
    )
}

export default Booknow
