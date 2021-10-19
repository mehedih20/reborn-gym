import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const getLocalCart = () => {
  const list = localStorage.getItem("cartList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [cartList, setCartList] = useState(getLocalCart());

  useEffect(() => {
    fetch("./public.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, services, setServices }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { useCart, CartProvider };
