"use client";

import { useCart } from "../context/cartContext";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    description: "High performance laptop",
    image:
      "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    description: "Latest smartphone with great features",
    image:
      "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    description: "Noise-cancelling headphones",
    image:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png",
  },
];

export default function ProductListPage() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow p-4 flex flex-col">
          <Link href={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          </Link>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">₹{product.price}</p>
          <p className="mt-2">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
