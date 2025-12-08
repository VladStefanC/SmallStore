"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export default function ProductsProvider(props) {
  const { children } = props;

  const [cart, setCart] = useState({});

  function handleIncrementProduct(price_id, num,data, noIncrement = false) {
    //add product to cart
    const newCart = {
      ...cart,
    };
    if (price_id in cart) {
      //turns out the product is already in the cart and increment | decrement it
      //newCart[price_id] = newCart[price_id] + num;
      newCart[price_id] = {
        ...data,
        quantity : noIncrement ? num : newCart[price_id]?.quantity + num
      }

      //if newCart[price_ide] = 0 in that case delete
    } else {
      //product not in cart so add it
      newCart[price_id] = {
        ...data, 
        quantity: num,
      }
    }

    if (parseInt(newCart[price_id].quantity) <= 0) {
      //remove in case decrement reaches 0
      delete newCart[price_id];
    }

    setCart(newCart)
  }

  const value = {
    cart,
    handleIncrementProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
