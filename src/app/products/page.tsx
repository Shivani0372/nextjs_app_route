"use client";

import Link from "next/link";
import { useCart } from "../context/cartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000, description: "High performance laptop", image: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" },
  { id: 2, name: "Phone", price: 20000, description: "Latest smartphone", image: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg" },
  { id: 3, name: "Headphones", price: 3000, description: "Noise-cancelling headphones", image: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png" },
];

export default function ProductListPage() {
  const { addToCart } = useCart();

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm d-flex flex-column">
            <img src={product.image} className="card-img-top" style={{ maxHeight: 200, objectFit: "cover" }} alt={product.name} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="text-success">₹{product.price.toLocaleString()}</p>
              <p className="card-text">{product.description}</p>
              <div className="mt-auto d-flex justify-content-between">
                <Link href={`/products/${product.id}`} className="btn btn-outline-primary">View</Link>
                <button onClick={() => addToCart({ ...product, quantity: 1 })} className="btn btn-success">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
