import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => items.find((e) => e.producto.id === id) !== undefined;
  
  const clear = () => {
    setItems([]);
  };
  
  const cartSize = () => items.reduce((acc, cur) => acc + cur.quantity, 0);

  const removeItem = (id) => {
    setItems(items.filter((e) => e.producto.id !== id));
  };

  const addItem = (producto, quantity) => {
    if (isInCart(producto.id)) {
      setItems(
        items.map((i) => {
          if (i.producto.id === producto.id) i.quantity = i.quantity + quantity;
          return i;
        })
      );
    } else {
      setItems([...items, { producto, quantity }]);
    }
  };

  useEffect(() => {
    console.log("cart", items);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, isInCart, removeItem, clear, cartSize }}>
      {children}
    </CartContext.Provider>
  );
};