
import React from 'react'
import HomeNav from './Navbar/HomeNav'
import Footer from "./Footer"
import Location from './Location'
import VehicleHeading from './VehicleHeading'
import CarCard from './CarCard'

import img1 from '../Images/Main-home-vehicle-list-img-01.jpg'
import img2 from '../Images/Main-home-vehicle-list-img-02.jpg'
import img3 from '../Images/Main-home-vehicle-list-img-03.jpg'
import img4 from '../Images/Main-home-vehicle-list-img-04.jpg'
import img5 from '../Images/Main-home-vehicle-list-img-05.jpg'
import img6 from '../Images/Main-home-vehicle-list-img-06.jpg'

const Vehicle = () => {
  const carCardInfo = [
    {img: img1, title: "Aston Martin DB11 AMR", type: "4x4"},
    {img: img2, title: "Ford F-150 Raptor", type: "Sports"},
    {img: img3, title: "Bmw M 3 Coupe", type: "Limusine"},
    {img: img4, title: "Bmw X2 M35i DriveX", type: "Limusine"},
    {img: img5, title: "Mercedes G Class", type: "4x4"},
    {img: img6, title: "Ford Raptor 135 X", type: "Sports"}
  ]

  return (
    <div className="bg-[#141A1C] min-h-screen">
      <HomeNav />

      {/* Page Heading */}
      <VehicleHeading />

      {/* Car Cards Grid */}
      <div className="w-11/12 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {carCardInfo.map((item, index) => (
          <CarCard
            key={index}
            img={item.img}
            title={item.title}
            type={item.type}
          />
        ))}
      </div>

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Vehicle
