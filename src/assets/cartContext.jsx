import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
//add prodcuts
 const addToCart = (product) => {
  setCartItems((prev=> {
    const exists =prev.find(item=> item.id ===product.id);
    if(exists){
      return prev.map((item)=>(
        item.id === product.id ?{...item,qty: item.qty+1}:item

      ))
    }
    return [...prev,{...product,qty:1  }]
  }))
 }
      //increase prodcut
  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };
//decrease product
  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
//remove product
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  //total qty
  const totalQty = cartItems.reduce(
    (total,item)=> total + item.qty,0
  )
  // total price
const totalPrice = cartItems.reduce(
  (total, item) => total + parseFloat(item.cost) * item.qty,
  0
);



  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      increaseQty,
      decreaseQty,
      removeFromCart,
      totalQty,totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
