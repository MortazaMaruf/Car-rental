import React from 'react'
import HomeNav from './Navbar/HomeNav'
import ShopCard from './ShopCard'
import img1 from '../Images/shop-single-img-02-300x371.jpg'
import img2 from '../Images/shop-single-img-03-300x371.jpg'
import img3 from '../Images/shop-single-img-04-300x371.jpg'
import img4 from '../Images/shop-single-img-05-300x371.jpg'
import img5 from '../Images/shop-single-img-06-300x371.jpg'
import img6 from '../Images/shop-single-img-07-300x371.jpg'
import Location from './Location'
import Footer from './Footer'
import PropularProducts from './PropularProducts'
const Shop = () => {
  const shopCardInfo = [
       {id:1, img:img1,title:"Cabrio Rent",category:"Expensive",cost:"210.00"},
       {id:2, img:img2,title:"Mercedes 4×4",category:"Expensive",cost:"220.00"},
        {id:3, img:img3,title:"Porche Macan",category:"Expensive",cost:"210.00"},
        {id:4, img:img4,title:"Vinttage Book",category:"Expensive",cost:"70.00"},
        {id:5, img:img5,title:"Rolss Royce",category:"Expensive",cost:"170.00"},
        {id:6, img:img6,title:"Mercedes Benz",category:"Expensive",cost:"180.00"},
    ]
  return (
  <div className='bg-[#141A1C]'>

      <div className='w-11/12 mx-auto'>
      <HomeNav/>

    
      <div className='flex items-start justify-between'>
    <div className='grid grid-cols-2 mt-40 gap-x-25'>
       {shopCardInfo.map((item,index)=> (
        <ShopCard
        key={item.id}
        id = {item.id}
        img={item.img}
        title={item.title}
        category={item.category}
        cost={item.cost}
        />
        
      ))}
     </div>
      <PropularProducts/>   
      </div>
   
     <Location/>
     <Footer/>

    </div>
  </div>
  )
}

export default Shop
