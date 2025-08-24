// export default function HomePage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Welcome to ShopEasy</h1>
//       <p className="text-gray-600">Your one-stop shop for electronics & more.</p>
//       <section className="bg-yellow-300 p-6 rounded-xl shadow-md mb-8">
// <h2 className="text-xl font-semibold mb-2">🔥 Today’s Special Offers</h2>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">50% Off on Headphones</h3>
// <p className="text-gray-600">Grab premium headphones at half the price.</p>
// </div>
// <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">Buy 1 Get 1 Free: Smartphones</h3>
// <p className="text-gray-600">Exclusive deal on select smartphones.</p>
// </div>
// <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">Flat 30% Off on Laptops</h3>
// <p className="text-gray-600">Limited time discount on top laptops.</p>
// </div>
// </div>
// </section>


// {/* Featured Products */}
// <section>
// <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">Laptop</h3>
// <p>High-performance laptop</p>
// <p className="font-semibold">₹50,000</p>
// </div>
// <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">Phone</h3>
// <p>Latest smartphone</p>
// <p className="font-semibold">₹20,000</p>
// </div>
// <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
// <h3 className="font-bold">Headphones</h3>
// <p>Noise-cancelling</p>
// <p className="font-semibold">₹3,000</p>
// </div>
// </div>
// </section>
//     </div>

//   );
// }


export default function HomePage() {
const offers = [
{
id: 1,
title: "Headphones",
offer: "50% Off",
image: "https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239033_0_aq6dfy.png",
},
{
id: 2,
title: "Smartphone",
offer: "Buy 1 Get 1 Free",
image: "https://cdn.mos.cms.futurecdn.net/hf2CQvHr9KNtKuUSDkeQVH.jpg",
},
{
id: 3,
title: "Laptop",
offer: "30% Off",
image: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
},
];


return (
<div>
<h1 className="text-2xl font-bold mb-6">Welcome to our E-Commerce Store</h1>
<section>
<h2 className="text-xl font-semibold mb-4">🔥 Offers for You</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{offers.map((item) => (
<div
key={item.id}
className="border rounded-lg shadow p-4 text-center hover:shadow-lg transition"
>
<img
src={item.image}
alt={item.title}
className="mx-auto mb-3 w-32 h-32 object-contain"
/>
<h3 className="font-bold">{item.title}</h3>
<p className="text-green-600 font-semibold">{item.offer}</p>
</div>
))}
</div>
</section>
</div>
);
}