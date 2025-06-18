"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { frederickaTheGreat } from "@/app/ui/fonts";
// import { useSession } from "next-auth/react";
// import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // const { data: session, status } = useSession();

  // Hide search bar on products page since it has its own advanced search
  const shouldShowSearch = !pathname.startsWith("/products");

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
    <nav
      className="py-2 px-4 bg-white border-b border-mango3"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={`${frederickaTheGreat.className} text-mango4 text-xl md:text-2xl hover:text-white hover:bg-mango4 px-2 md:px-3 py-1.5 rounded transition flex-shrink-0`}
          aria-label="Handcrafted Haven homepage"
        >
          <span className="hidden sm:inline">Handcrafted Haven</span>
          <span className="sm:hidden">Haven</span>
        </Link>

        {/* Search Section - Hidden on products page */}
        {shouldShowSearch && (
          <div className="flex-1 max-w-2xl mx-2 md:mx-8" role="search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex"
            >
              <label htmlFor="navbar-search" className="sr-only">
                Search for handcrafted products
              </label>
              <input
                id="navbar-search"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-mango1 text-dark flex-1 px-3 md:px-4 py-2 border border-mango3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-mango2 focus:border-mango2 text-sm md:text-base"
                aria-describedby="search-help"
              />
              <span id="search-help" className="sr-only">
                Enter keywords to search for products, then press enter or click
                search button
              </span>
              <button
                type="submit"
                onClick={handleSearch}
                className="px-3 md:px-6 py-2 bg-mango4 text-white rounded-r-lg hover:bg-mango2 focus:bg-mango2 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors font-medium text-sm md:text-base"
                aria-label="Search products"
              >
                <span className="hidden sm:inline">Search</span>
                <span className="sm:hidden" aria-hidden="true">
                  🔍
                </span>
              </button>
            </form>
          </div>
        )}

        {/* Navigation Links */}
        <div className="flex gap-1 md:gap-2 flex-shrink-0" role="menubar">
          <Link
            href="/products"
            className="text-mango4 hover:text-white hover:bg-mango4 focus:text-white focus:bg-mango4 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 px-2 md:px-3 py-1.5 rounded transition text-sm md:text-base"
            role="menuitem"
            aria-label="Browse all products"
          >
            Products
          </Link>
          <Link
            href="/artist"
            className="text-mango4 hover:text-white hover:bg-mango4 focus:text-white focus:bg-mango4 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 px-2 md:px-3 py-1.5 rounded transition text-sm md:text-base"
            role="menuitem"
            aria-label="View artists"
            aria-disabled="true"
          >
            <span className="hidden sm:inline">Artists</span>
            <span className="sm:hidden">Art</span>
          </Link>
          <Link
            href="/login"
            className="text-mango4 hover:text-white hover:bg-mango4 focus:text-white focus:bg-mango4 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 px-2 md:px-3 py-1.5 rounded transition text-sm md:text-base"
            role="menuitem"
            aria-label="Sign in to your account (coming soon)"
            aria-disabled="true"
          >
            <span className="hidden sm:inline">Sign In</span>
            <span className="sm:hidden" aria-hidden="true">
              👤
            </span>
          </Link>
        </div>

        {/* User Section - Shows on all pages
        <div className="ml-auto">
          {status === "loading" ? (
            <p className="text-mango4 text-sm">Loading...</p>
          ) : session ? (
            <div className="flex items-center gap-2">
              <span className="text-mango4 text-sm">
                Welcome, {session.user?.name}!{" "}
              </span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 bg-mango4 text-white rounded-lg hover:bg-mango2 focus:bg-mango2 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors text-sm"
                aria-label="Sign out of your account"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-3 py-1 bg-mango4 text-white rounded-lg hover:bg-mango2 focus:bg-mango2 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors text-sm"
              aria-label="Sign in with Google"
            >
              Sign In with Google
            </button>
          )}
        </div> */}
      </div>
    </nav>
  );
}
