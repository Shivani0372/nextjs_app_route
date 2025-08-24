// app/products/[id]/page.tsx
import { notFound } from "next/navigation";

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

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params safely
  const { id } = await params;

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return notFound();

  return (
    <div className="flex gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-1/3 rounded-lg shadow"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-700">₹{product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
}
