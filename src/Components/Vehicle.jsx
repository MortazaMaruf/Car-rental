import React from 'react'
import HomeNav from './Navbar/HomeNav'
import Footer from "./Footer"
import HomeCarInfo from './HomeCarInfo'
import CarCard from './CarCard'
import Location from './Location'
import VehicleHeading from './VehicleHeading'
import img1 from '../Images/Main-home-vehicle-list-img-01.jpg'
import img2 from '../Images/Main-home-vehicle-list-img-02.jpg'
import img3 from '../Images/Main-home-vehicle-list-img-03.jpg'
import img4 from '../Images/Main-home-vehicle-list-img-04.jpg'
import img5 from '../Images/Main-home-vehicle-list-img-05.jpg'
import img6 from '../Images/Main-home-vehicle-list-img-06.jpg'
const Vehicle = () => {
   const carCardInfo = [
          {img:img1,title:"Aston Martin DB11 AMR",type:"4x4"},
          {img:img2,title:"Ford F-150 Raptor",type:"Sports"},
          {img:img3,title:"Bmw M 3 Coupe",type:"Limusine"},
          {img:img4,title:"Bmw X2 M35i DriveX",type:"Limusine"},
          {img:img5,title:"Mercedes G Class",type:"4x4"},
          {img:img6,title:"Ford Raptor 135 X",type:"Sports"}
      ]
  return (
    <div className='bg-[#141A1C]'>
      <HomeNav/>

     
      
      <VehicleHeading/>
         <div className='grid grid-cols-3 gap-10 my-15'>
                    {carCardInfo.map((item,index)=>(
              
                    <CarCard key={index}
                    img= {item.img}
                    title = {item.title}
                    type={item.type}
                    
                    
                    />
                

                ))}
                </div>
      <Location/>
      <Footer/>
      
    </div>
  )
}

export default Vehicle
