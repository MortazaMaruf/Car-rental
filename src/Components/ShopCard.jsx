import React from 'react'
import Button from './Button'

const ShopCard = ({ img, title, category, cost }) => {

    return (
        <div className='cursor-pointer'>
            <div className=' py-5'>
                <div className='w-[25vw]  '>
                    <div className='relative group'>
                        <img src={img} alt=""
                            className='w-full' />
                        <div className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 w-full h-full '>
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Button text={"Add to cart"}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex  justify-between my-5'>
                        <div >
                            <h1 className='pb-4 text-3xl '>{title}</h1>
                            <h1 className='text-[#BFA37C] tracking-widest uppercase text-md'>{category}</h1>
                        </div>
                        <div>
                            <h1 className='text-2xl'><sup className='text-[#BFA37C] text-lg'>$</sup>{cost}</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default ShopCard
