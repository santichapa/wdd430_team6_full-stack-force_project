"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { frederickaTheGreat } from "@/app/ui/fonts";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear the search input after submitting
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="py-2 px-4 bg-white border-b border-mango3">
      <div className="max-w-[1400px] mx-auto flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={`${frederickaTheGreat.className} text-2xl hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition`}
        >
          Handcrafted Haven
        </Link>

        {/* Simple Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Search handcrafted products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-2 border border-mango3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-mango2"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-mango4 text-white rounded-r-lg hover:bg-mango2 transition-colors font-medium"
            >
              Search
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2">
          <Link
            href="/products"
            className="hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition"
          >
            Products
          </Link>
          <Link
            href="#"
            className="hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition"
          >
            Artists
          </Link>
          <Link
            href="#"
            className="hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}