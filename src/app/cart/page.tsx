"use client";

import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border p-4 rounded">
          <div className="flex gap-4 items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
