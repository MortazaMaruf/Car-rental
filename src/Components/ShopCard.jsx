
import React from 'react'
import Button from './Button'
import { useCart } from '../assets/cartContext'

const ShopCard = ({ id, img, title, category, cost }) => {
  const { addToCart } = useCart()
  const product = { id, img, title, category, cost }

  return (
    <div className="cursor-pointer w-full">
      <div className="py-5">
        <div className="relative group w-full sm:w-auto">
          
          {/* Image */}
          <img 
            src={img} 
            alt={title} 
            className="w-full object-cover rounded-lg sm:rounded-none"
          />

          {/* Hover Overlay */}
          <div className="hidden lg:group-hover:flex absolute inset-0 bg-black/70 items-center justify-center rounded-lg">
            <Button text="Add to cart" onclick={() => addToCart(product)} />
          </div>

        </div>

        {/* Title, Category, Cost */}
        <div className="flex flex-col md:flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-4 gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
            <h2 className="text-[#BFA37C] tracking-widest uppercase text-sm sm:text-md">{category}</h2>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              <sup className="text-[#BFA37C] text-sm sm:text-lg">$</sup>{cost}
            </h1>
          </div>
           <div className="block lg:hidden ">
              <Button text="Add to cart" onclick={() => addToCart(product)} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCard
