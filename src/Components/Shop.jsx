
import React from 'react'
import HomeNav from './Navbar/HomeNav'
import ShopCard from './ShopCard'
import Location from './Location'
import Footer from './Footer'
import PropularProducts from './PropularProducts'

import img1 from '../Images/shop-single-img-02-300x371.jpg'
import img2 from '../Images/shop-single-img-03-300x371.jpg'
import img3 from '../Images/shop-single-img-04-300x371.jpg'
import img4 from '../Images/shop-single-img-05-300x371.jpg'
import img5 from '../Images/shop-single-img-06-300x371.jpg'
import img6 from '../Images/shop-single-img-07-300x371.jpg'

const Shop = () => {
  const shopCardInfo = [
    {id:1, img:img1, title:"Cabrio Rent", category:"Expensive", cost:"210.00"},
    {id:2, img:img2, title:"Mercedes 4×4", category:"Expensive", cost:"220.00"},
    {id:3, img:img3, title:"Porche Macan", category:"Expensive", cost:"210.00"},
    {id:4, img:img4, title:"Vinttage Book", category:"Expensive", cost:"70.00"},
    {id:5, img:img5, title:"Rolss Royce", category:"Expensive", cost:"170.00"},
    {id:6, img:img6, title:"Mercedes Benz", category:"Expensive", cost:"180.00"},
  ]

  return (
    <div className="bg-[#141A1C] min-h-screen">
      <HomeNav />

      <div className="w-11/12 mx-auto mt-20 flex flex-col lg:flex-row gap-10">

        {/* Shop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1">
          {shopCardInfo.map((item) => (
            <ShopCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              category={item.category}
              cost={item.cost}
            />
          ))}
        </div>

        {/* Sidebar: Popular Products */}
        <div className="lg:w-1/4 w-full">
          <PropularProducts />
        </div>

      </div>

      {/* Location & Footer */}
      <Location />
      <Footer />
    </div>
  )
}

export default Shop
