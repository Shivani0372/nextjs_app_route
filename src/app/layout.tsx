import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./context/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopEasy",
  description: "E-Commerce App built with Next.js 13 App Router",
};

// import Link from "next/link";
// import "./globals.css";
// import { CartProvider } from "./context/cartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          {/* Navbar */}
          <header className="bg-yellow-500 p-4 flex items-center justify-between sticky top-0 z-50">
            <Link href="/" className="font-bold text-xl">ShopEasy</Link>

            <input
              type="text"
              placeholder="Search products..."
              className="px-2 py-1 rounded w-1/2"
            />

            <nav className="space-x-4">
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart 🛒</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>

          {/* Page content */}
          <main className="flex-grow container mx-auto p-4">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center py-4">
            © 2025 ShopEasy. All Rights Reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
