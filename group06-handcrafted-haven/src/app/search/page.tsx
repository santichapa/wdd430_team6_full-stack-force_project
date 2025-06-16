import { Suspense } from "react";
import { PrismaClient } from '@prisma/client';
import { ProductCard } from "@/app/ui/cards";
import { frederickaTheGreat } from "@/app/ui/fonts";

const prisma = new PrismaClient();

type ProductWithArtist = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  price: number;
  artist: {
    name: string;
  };
  createdAt: Date;
  reviews: {
    rating: number;
  }[];
};

type ProductWithRating = ProductWithArtist & {
  avgRating: number;
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    artist?: string;
    minRating?: string;
    sortBy?: string;
  }>;
}

interface WhereConditions {
  OR?: Array<{
    title?: { contains: string; mode: 'insensitive' };
    description?: { contains: string; mode: 'insensitive' };
    OR?: Array<{
      title?: { contains: string; mode: 'insensitive' };
      description?: { contains: string; mode: 'insensitive' };
    }>;
  }>;
  artist?: {
    name: { contains: string; mode: 'insensitive' };
  };
}

interface OrderByCondition {
  price?: 'asc' | 'desc';
  createdAt?: 'asc' | 'desc';
}

async function SearchResults({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const { q, category, artist, minRating, sortBy } = params;

  const whereConditions: WhereConditions = {};

  // Text search in title and description
  if (q) {
    whereConditions.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } }
    ];
  }

  // Category filter 
  if (category && category !== "All Categories") {
    const categoryKeywords: Record<string, string[]> = {
      "Pottery & Ceramics": ["ceramic", "pottery", "clay", "mug", "plate", "vase"],
      "Textiles & Fabric": ["textile", "fabric", "scarf", "cushion", "embroidered"],
      "Woodwork": ["wood", "wooden", "carved", "spoon", "chess"],
      "Jewelry & Accessories": ["jewelry", "necklace", "bracelet", "ring"],
      "Home Decor": ["candle", "basket", "decor", "home"],
      "Art & Paintings": ["art", "painting", "canvas"]
    };

    const keywords = categoryKeywords[category] || [];
    if (keywords.length > 0) {
      whereConditions.OR = keywords.map(keyword => ({
        OR: [
          { title: { contains: keyword, mode: 'insensitive' } },
          { description: { contains: keyword, mode: 'insensitive' } }
        ]
      }));
    }
  }

  // Artist filter
  if (artist) {
    whereConditions.artist = {
      name: { contains: artist, mode: 'insensitive' }
    };
  }

  // Build order by clause
  let orderBy: OrderByCondition = { createdAt: 'desc' }; // Default: newest first

  switch (sortBy) {
    case 'price_low':
      orderBy = { price: 'asc' };
      break;
    case 'price_high':
      orderBy = { price: 'desc' };
      break;
    case 'newest':
      orderBy = { createdAt: 'desc' };
      break;
    case 'highest_rated':
      orderBy = { createdAt: 'desc' };
      break;
    default:
      orderBy = { createdAt: 'desc' };
  }

  // Execute the search query
  const products = await prisma.product.findMany({
    where: whereConditions,
    include: {
      artist: {
        select: {
          name: true,
        },
      },
      reviews: {
        select: {
          rating: true,
        },
      },
    },
    orderBy,
  }) as ProductWithArtist[];

  // Calculate average ratings and filter by minimum rating
  let productsWithRating: ProductWithRating[] = products.map((product) => {
    const ratings = product.reviews.map((review) => review.rating);
    const avgRating = ratings.length > 0 
      ? ratings.reduce((sum: number, rating: number) => sum + rating, 0) / ratings.length 
      : 0;
    
    return {
      ...product,
      avgRating,
    };
  });

  // Filter by minimum rating
  if (minRating) {
    const minRatingNum = parseFloat(minRating);
    productsWithRating = productsWithRating.filter((product) => product.avgRating >= minRatingNum);
  }

  // Sort by highest rated if selected
  if (sortBy === 'highest_rated') {
    productsWithRating.sort((a, b) => b.avgRating - a.avgRating);
  }

  return productsWithRating;
}

function SearchResultsContent({ searchParams }: SearchPageProps) {
  return (
    <Suspense fallback={<SearchSkeleton />}>
      <SearchResultsInner searchParams={searchParams} />
    </Suspense>
  );
}

async function SearchResultsInner({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const products = await SearchResults({ searchParams });
  const { q, category, artist, minRating } = params;

  // Build search summary
  const searchTerms = [];
  if (q) searchTerms.push(`"${q}"`);
  if (category && category !== "All Categories") searchTerms.push(category);
  if (artist) searchTerms.push(`by ${artist}`);
  if (minRating) searchTerms.push(`${minRating}+ stars`);

  const searchSummary = searchTerms.length > 0 
    ? `Results for ${searchTerms.join(', ')}` 
    : 'All Products';

  return (
    <div className="min-h-screen bg-mango1">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Search Summary */}
        <div className="mb-8">
          <h1 className={`${frederickaTheGreat.className} text-4xl text-mango4 mb-2`}>
            Search Results
          </h1>
          <p className="text-lg text-mango3 mb-2">{searchSummary}</p>
          <p className="text-mango4">
            Found {products.length} {products.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Results Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
          <NoResults />
        )}
      </div>
    </div>
  );
}

function NoResults() {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-mango4 mb-4">No products found</h2>
        <p className="text-mango3 mb-6">
          We couldn&apos;t find any products matching your search criteria.
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-mango3">
          <h3 className="font-semibold text-mango4 mb-3">Try:</h3>
          <ul className="text-left space-y-2 text-mango3">
            <li>• Checking your spelling</li>
            <li>• Using fewer or different keywords</li>
            <li>• Removing some filters</li>
            <li>• Browsing all categories</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <a
            href="/search"
            className="inline-block px-6 py-3 bg-mango4 text-white rounded-lg hover:bg-mango2 transition-colors"
          >
            Clear All Filters
          </a>
        </div>
      </div>
    </div>
  );
}

function SearchSkeleton() {
  return (
    <div className="min-h-screen bg-mango1">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-12 bg-mango3 rounded w-64 mb-4 animate-pulse"></div>
          <div className="h-6 bg-mango3 rounded w-48 mb-2 animate-pulse"></div>
          <div className="h-4 bg-mango3 rounded w-32 animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
              <div className="h-48 bg-mango3 rounded-lg mb-4"></div>
              <div className="h-6 bg-mango3 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-mango3 rounded w-full mb-2"></div>
              <div className="h-4 bg-mango3 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return <SearchResultsContent searchParams={searchParams} />;
}