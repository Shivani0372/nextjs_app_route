"use client";

const products = [
  { id: 1, name: "Laptop", price: 50000, description: "High performance laptop", image: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0" },
  { id: 2, name: "Phone", price: 20000, description: "Latest smartphone", image: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg" },
  { id: 3, name: "Headphones", price: 3000, description: "Noise-cancelling headphones", image: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png" },
];

type ProductDetailProps = {
  params: { id: string };
};

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="card shadow-lg p-4">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={product.image} className="img-fluid rounded" style={{ maxHeight: 300, objectFit: "cover" }} alt={product.name} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.price.toLocaleString()}</h4>
          <p className="mt-3">{product.description}</p>
          {/* No Add-to-Cart button here */}
        </div>
      </div>
    </div>
  );
}
