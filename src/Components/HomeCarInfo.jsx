import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import CarCard from './CarCard';
import img1 from '../Images/Main-home-vehicle-list-img-01.jpg'
import img2 from '../Images/Main-home-vehicle-list-img-02.jpg'
import img3 from '../Images/Main-home-vehicle-list-img-03.jpg'
import img4 from '../Images/Main-home-vehicle-list-img-04.jpg'
import img5 from '../Images/Main-home-vehicle-list-img-05.jpg'
import img6 from '../Images/Main-home-vehicle-list-img-06.jpg'

const HomeCarInfo = () => {
    const carCardInfo = [
        {img:img1,title:"Aston Martin DB11 AMR",type:"4x4"},
        {img:img2,title:"Ford F-150 Raptor",type:"Sports"},
        {img:img3,title:"Bmw M 3 Coupe",type:"Limusine"},
        {img:img4,title:"Bmw X2 M35i DriveX",type:"Limusine"},
        {img:img5,title:"Mercedes G Class",type:"4x4"},
        {img:img6,title:"Ford Raptor 135 X",type:"Sports"}
    ]
  return (
    <div className='bg-[#0C1315]'>
        <div className='  w-11/12 mx-auto'>
            <div className='flex items-cener justify-between py-15'>
                <div className='left'>
          <h1 className='text-5xl leading-15'>What We Provide Is The Luxury <br /> Transport And Most Comfortable <br /> Experience</h1>
        </div>
            <div className='right'>
                <p className='text-gray-400 text-lg'>Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo intege in <br /> malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male <br /> bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio <br /> facilisis. Fringilla est ullamcorper eget nulla facilisi nul.</p>
                    <div className='flex items-center gap-5 my-10 uppercase text-[#BFA37C] text-lg'>
                        <TfiHeadphoneAlt size={40}  />
                        <span>Call center:</span>
                        <span> +1234 </span>
                        <span> 5678</span>
                        <span> 901</span>
                    </div>
        </div>
            </div>
                <div className='grid grid-cols-3 gap-10'>
                    {carCardInfo.map((item,index)=>(
              
                    <CarCard key={index}
                    img= {item.img}
                    title = {item.title}
                    type={item.type}
                    
                    />
                

                ))}
                </div>
        </div>
      
    </div>
  )
}

export default HomeCarInfo
