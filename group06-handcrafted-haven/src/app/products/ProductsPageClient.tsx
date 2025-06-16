"use client";

import { useState, useEffect } from 'react';
import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";

type ProductWithArtist = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  price: number;
  artist: {
    name: string;
  };
};

interface ProductsPageClientProps {
  initialProducts: ProductWithArtist[];
}

export default function ProductsPageClient({ initialProducts }: ProductsPageClientProps) {
  const [filteredProducts, setFilteredProducts] = useState<ProductWithArtist[]>(initialProducts);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "All Categories",
    "Pottery & Ceramics",
    "Textiles & Fabric",
    "Woodwork",
    "Jewelry & Accessories",
    "Home Decor",
    "Art & Paintings"
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price_low", label: "Price: Low to High" },
    { value: "price_high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" }
  ];

  // Apply filters whenever filter states change
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...initialProducts];

      // Text search
      if (searchQuery.trim()) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Category filter
      if (selectedCategory && selectedCategory !== "All Categories") {
        const categoryKeywords: Record<string, string[]> = {
          "Pottery & Ceramics": ["ceramic", "pottery", "clay", "mug", "plate", "vase"],
          "Textiles & Fabric": ["textile", "fabric", "scarf", "cushion", "embroidered"],
          "Woodwork": ["wood", "wooden", "carved", "spoon", "chess"],
          "Jewelry & Accessories": ["jewelry", "necklace", "bracelet", "ring"],
          "Home Decor": ["candle", "basket", "decor", "home"],
          "Art & Paintings": ["art", "painting", "canvas"]
        };

        const keywords = categoryKeywords[selectedCategory] || [];
        if (keywords.length > 0) {
          filtered = filtered.filter(product =>
            keywords.some(keyword =>
              product.title.toLowerCase().includes(keyword) ||
              product.description.toLowerCase().includes(keyword)
            )
          );
        }
      }

      // Artist filter
      if (selectedArtist.trim()) {
        filtered = filtered.filter(product =>
          product.artist.name.toLowerCase().includes(selectedArtist.toLowerCase())
        );
      }

      // Sort products
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'price_low':
            return a.price - b.price;
          case 'price_high':
            return b.price - a.price;
          case 'name':
            return a.title.localeCompare(b.title);
          case 'newest':
          default:
            return 0; 
        }
      });

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [initialProducts, searchQuery, selectedCategory, selectedArtist, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedArtist("");
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-mango1">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Page Header */}
        <header className="text-center mb-8">
          <h1 className={`${frederickaTheGreat.className} text-5xl text-mango4 mb-4`}>
            All Products
          </h1>
          <p className="text-lg text-mango3 max-w-2xl mx-auto mb-6">
            Browse our complete collection of handcrafted treasures. 
            Each piece is lovingly made by skilled artisans with attention to detail and passion.
          </p>
          <p className="text-mango4 font-medium" aria-live="polite" aria-atomic="true">
            Showing {filteredProducts.length} of {initialProducts.length} products
          </p>
        </header>

        {/* Advanced Search & Filters */}
        <section className="bg-white rounded-lg border border-mango3 p-6 mb-8" aria-labelledby="filter-heading">
          <div className="flex items-center justify-between mb-4">
            <h2 id="filter-heading" className="text-lg font-semibold text-mango4">Search & Filter Products</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 bg-mango4 text-white rounded-lg hover:bg-mango2 focus:bg-mango2 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors"
              aria-expanded={showFilters}
              aria-controls="advanced-filters"
              aria-label={showFilters ? 'Hide advanced filters' : 'Show advanced filters'}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Main Search */}
          <div className="mb-4">
            <label htmlFor="product-search" className="block text-sm font-medium text-mango4 mb-2">
              Search Products
            </label>
            <input
              id="product-search"
              type="text"
              placeholder="Search products, descriptions, or artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-mango3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mango2 focus:border-mango2"
              aria-describedby="search-description"
            />
            <p id="search-description" className="sr-only">
              Enter keywords to search through product names, descriptions, and artist names
            </p>
          </div>

          {/* Advanced Filters */}
          <div 
            id="advanced-filters"
            className={`${showFilters ? 'block' : 'hidden'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-mango3`}
            aria-hidden={!showFilters}
          >
            {/* Category */}
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-mango4 mb-2">
                Category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-mango3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mango2 focus:border-mango2"
                aria-describedby="category-help"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <p id="category-help" className="sr-only">
                Filter products by category type
              </p>
            </div>

            {/* Artist */}
            <div>
              <label htmlFor="artist-filter" className="block text-sm font-medium text-mango4 mb-2">
                Artist
              </label>
              <input
                id="artist-filter"
                type="text"
                placeholder="Search by artist name..."
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
                className="w-full px-3 py-2 border border-mango3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mango2 focus:border-mango2"
                aria-describedby="artist-help"
              />
              <p id="artist-help" className="sr-only">
                Filter products by artist or creator name
              </p>
            </div>

            {/* Sort */}
            <div>
              <label htmlFor="sort-filter" className="block text-sm font-medium text-mango4 mb-2">
                Sort By
              </label>
              <select
                id="sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-mango3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mango2 focus:border-mango2"
                aria-describedby="sort-help"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p id="sort-help" className="sr-only">
                Change the order products are displayed
              </p>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 border border-mango3 text-mango4 rounded-lg hover:bg-mango5 focus:bg-mango5 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors"
                aria-label="Clear all search filters and reset to default view"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <main>
          {filteredProducts.length > 0 ? (
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              role="region"
              aria-label="Products grid"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.imageUrl || '/images/placeholder.jpg'}
                  artist={product.artist.name}
                  price={product.price}
                />
              ))}
            </div>
          ) : (
            /* No Products State */
            <div className="text-center py-16" role="status" aria-live="polite">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
                <h2 className="text-2xl font-bold text-mango4 mb-4">No Products Found</h2>
                <p className="text-mango3 mb-6">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-mango4 text-white rounded-lg hover:bg-mango2 focus:bg-mango2 focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors"
                  aria-label="Clear all filters to show all products"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Category Quick Links */}
        {initialProducts.length > 0 && (
          <aside className="mt-12 text-center" aria-labelledby="quick-categories">
            <div className="bg-white rounded-lg border border-mango3 p-6">
              <h3 id="quick-categories" className="font-semibold text-mango4 mb-3">Quick Category Search</h3>
              <nav aria-label="Quick category navigation">
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Pottery & Ceramics",
                    "Textiles & Fabric", 
                    "Woodwork",
                    "Jewelry & Accessories",
                    "Home Decor"
                  ].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="px-4 py-2 bg-mango5 text-mango4 rounded-full hover:bg-mango3 hover:text-white focus:bg-mango3 focus:text-white focus:outline-none focus:ring-2 focus:ring-mango2 focus:ring-offset-2 transition-colors text-sm"
                      aria-label={`Filter products by ${category} category`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}