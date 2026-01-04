import React from "react";
import { useCart } from "../assets/cartContext";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cartItems, addToCart, decreaseQty, removeFromCart, totalPrice } = useCart();

  if(cartItems.length === 0){
    return <h1 className="text-center text-2xl mt-20">Your cart is empty</h1>
  }

  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-3xl mb-10">Your Cart</h1>
      <div className="flex flex-col gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border p-5 rounded-md">
            
            <div className="flex items-center gap-5">
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover"/>
              <div>
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-[#BFA37C]">{item.category}</p>
                <p className="text-lg font-semibold">${item.cost}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-600 p-2 rounded cursor-pointer"
              >
                <HiMinusSmall size={20} />
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => addToCart(item)}
                className="bg-gray-600 p-2 rounded cursor-pointer"
              >
                <GoPlus size={20} />
              </button>
            </div>

            <div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold cursor-pointer"
              >
                <MdDelete size={25}/>
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)||"0.00"}</h2>
        <button className="mt-5 bg-[#BFA37C] text-black px-5 py-3 rounded-md cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage;
