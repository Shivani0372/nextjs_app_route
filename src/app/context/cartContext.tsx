"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1️⃣ Define the product type
export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};

// 2️⃣ Define the context type
type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

// 3️⃣ Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4️⃣ Create provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      // Avoid duplicate items
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 5️⃣ Hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
