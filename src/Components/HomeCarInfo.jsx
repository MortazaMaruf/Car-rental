
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
    {img: img1, title: "Aston Martin DB11 AMR", type: "4x4"},
    {img: img2, title: "Ford F-150 Raptor", type: "Sports"},
    {img: img3, title: "Bmw M 3 Coupe", type: "Limousine"},
    {img: img4, title: "Bmw X2 M35i DriveX", type: "Limousine"},
    {img: img5, title: "Mercedes G Class", type: "4x4"},
    {img: img6, title: "Ford Raptor 135 X", type: "Sports"}
  ]

  return (
    <div className="bg-[#0C1315] py-16">
      <div className="w-11/12 mx-auto">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20 mb-16">
          {/* Left */}
          <div className="flex-1">
            <h1 className=" text-2xl md:text-5xl lg:text-5xl font-bold leading-snug text-white">
              What We Provide Is The Luxury <br /> Transport And Most Comfortable <br /> Experience
            </h1>
          </div>

          {/* Right */}
          <div className="flex-1 text-gray-400 text-sm sm:text-base md:text-lg">
            <p className="mb-6">
              Vivamus arcu felis bibendum ut tristique et egestas. Ultricies leo integer in
              malesuada nunc vel risus commodo. Sapien nec sagittis aliquam male
              bibendum arcu vitae. In ornare quam viverra orci sagittis eu volutpat odio
              facilisis. Fringilla est ullamcorper eget nulla facilisi nul.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5 uppercase text-[#BFA37C] text-sm sm:text-lg font-semibold">
              <TfiHeadphoneAlt size={30} />
              <span>Call center:</span>
              <span>+1234 5678 901</span>
            </div>
          </div>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-6 lg:gap-8">
          {carCardInfo.map((item, index) => (
            <CarCard
              key={index}
              img={item.img}
              title={item.title}
              type={item.type}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeCarInfo
