import React from 'react'
import img1 from '../Images/shop-single-sidebar-img-01-300x371.jpg'
import img2 from '../Images/shop-single-sidebar-img-02-300x371.jpg'
import img3 from '../Images/shop-single-sidebar-img-03-300x371.jpg'


const PropularProducts = () => {
    const PropularProducts = [
        { img: img1, title: "Mercedes Bnz", price: "70.00" },
        { img: img2, title: "ROlce Royce", price: "180.00" },
        { img: img3, title: "lamborghini", price: "220.00" },
    ]
    return (
        <div className='mt-40 w-[25vw]'>
            <h1 className='text-2xl capitalize '>propular products</h1>
            <div className='my-10'>
                {PropularProducts.map((item, index) => (
                    <div className='flex items-start gap-5 my-10 cursor-pointer'>
                        <img src={item.img} alt="" className='w-[30%]' />
                        <div>
                            <h1 className='mb-2 text-xl capitalize'>{item.title}</h1>
                            <h1 className='text-xl capitalize'><sup className='text-lg font-light mr-1'>$</sup>{item.price}</h1>
                        </div>
                    </div>
                ))}
                <div className='category'>
                                <h1 className='text-2xl capitalize '>category</h1>
                                <div className='text-md my-5 uppercase text-[#BFA37C] '>
                                    <h1 className='tracking-widest my-5 cursor-pointer'>expensive</h1>
                                    <h1 className='tracking-widest my-5 cursor-pointer'>limo service</h1>
                                    

                                </div>


                </div>

            </div>

        </div>
    )
}

export default PropularProducts
