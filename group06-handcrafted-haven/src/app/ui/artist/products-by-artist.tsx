import { ProductCard } from "@/app/ui/cards";

// Temporary mock data - replace with actual data fetching later
const mockArtistProducts = [
  {
    id: 1,
    title: "Ceramic Vase",
    description: "Beautiful handcrafted ceramic vase with unique glazing",
    image: "/images/ceramic-vase.jpg",
    artist: "Clay Masters",
  },
  {
    id: 2,
    title: "Wooden Bowl Set",
    description: "Set of three handcarved wooden bowls",
    image: "/images/wooden-bowls.jpg",
    artist: "Clay Masters",
  },
  {
    id: 3,
    title: "Pottery Mug",
    description: "Rustic pottery mug perfect for morning coffee",
    image: "/images/pottery-mug.jpg",
    artist: "Clay Masters",
  },
  {
    id: 4,
    title: "Decorative Plate",
    description: "Hand-painted decorative plate with floral motifs",
    image: "/images/decorative-plate.jpg",
    artist: "Clay Masters",
  },
];

export default function ProductsByArtist() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Artist&apos;s Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArtistProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            artist={product.artist}
          />
        ))}
      </ul>
    </section>
  );
}