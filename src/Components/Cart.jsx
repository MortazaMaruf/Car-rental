
import React from "react";
import { useCart } from "../assets/cartContext";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const { cartItems, addToCart, decreaseQty, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return <h1 className="text-center text-2xl mt-20">Your cart is empty</h1>;
  }

  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-3xl mb-10 text-center sm:text-left">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-5 rounded-md gap-4 sm:gap-0"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-xl">{item.title}</h2>
                <p className="text-[#BFA37C]">{item.category}</p>
                <p className="text-lg font-semibold">${item.cost}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-600 p-2 rounded cursor-pointer hover:bg-gray-700 transition"
              >
                <HiMinusSmall size={18} />
              </button>

              <span className="px-2">{item.qty}</span>

              <button
                onClick={() => addToCart(item)}
                className="bg-gray-600 p-2 rounded cursor-pointer hover:bg-gray-700 transition"
              >
                <GoPlus size={18} />
              </button>
            </div>

            {/* Remove Button */}
            <div className="mt-3 sm:mt-0">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold cursor-pointer hover:text-red-700 transition"
              >
                <MdDelete size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="mt-10 text-center sm:text-right">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2) || "0.00"}</h2>
        <button className="mt-5 bg-[#BFA37C] text-black px-5 py-3 rounded-md cursor-pointer hover:bg-yellow-400 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
