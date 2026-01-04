import React from 'react'
import img1 from '../Images/shop-single-sidebar-img-01-300x371.jpg'
import img2 from '../Images/shop-single-sidebar-img-02-300x371.jpg'
import img3 from '../Images/shop-single-sidebar-img-03-300x371.jpg'

const PropularProducts = () => {
  const popularProducts = [
    { img: img1, title: "Mercedes Bnz", price: "70.00" },
    { img: img2, title: "Rolce Royce", price: "180.00" },
    { img: img3, title: "Lamborghini", price: "220.00" },
  ]

  return (
    <div className="mt-10 sm:mt-20 w-full sm:w-[300px] lg:w-[25%] px-4 sm:px-0">
      <h1 className="text-2xl capitalize mb-5">Popular Products</h1>

      {/* Products List */}
      <div className="space-y-6">
        {popularProducts.map((item, index) => (
          <div key={index} className="flex items-start gap-4 sm:gap-5 cursor-pointer">
            <img src={item.img} alt={item.title} className="w-1/3 sm:w-[30%] lg:w-auto rounded-lg" />
            <div className="flex flex-col justify-center  lg:gap-10 ">
              <h1 className="text-lg lg:text-xl font-semibold capitalize">{item.title}</h1>
              <h1 className="text-lg lg:text-xl">
                <sup className="text-sm lg:text-lg font-light mr-1">$</sup>{item.price}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Category Section */}
      <div className="mt-10 sm:mt-16">
        <h1 className="text-2xl capitalize mb-5">Category</h1>
        <div className="flex flex-col gap-3 text-md uppercase text-[#BFA37C]">
          <span className="tracking-widest cursor-pointer">Expensive</span>
          <span className="tracking-widest cursor-pointer">Limo Service</span>
        </div>
      </div>
    </div>
  )
}

export default PropularProducts
