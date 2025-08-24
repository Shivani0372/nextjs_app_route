export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-yellow-500 px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
