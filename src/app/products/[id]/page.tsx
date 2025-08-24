"use client";

import { useRouter } from "next/router";
import { useCart } from "../../context/cartContext";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹50,000",
    description: "High performance laptop",
    image: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "Phone",
    price: "₹20,000",
    description: "Latest smartphone with great features",
    image: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: "₹3,000",
    description: "Noise-cancelling headphones",
    image: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png",
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { addToCart } = useCart();

  // Wait until router query is available
  const { id } = router.query;
  if (!id) return <p>Loading...</p>;

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found</p>;

  return (
    <div className="card p-4 shadow-lg container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: 300, objectFit: "cover" }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{product.name}</h2>
          <h4 className="text-success">{product.price}</h4>
          <p className="mt-3">{product.description}</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => addToCart({ ...product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
