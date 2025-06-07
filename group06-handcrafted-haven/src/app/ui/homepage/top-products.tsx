import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";

// Temporary mock data; replace with fetch later
const mockProducts = [
  {
    id: 1,
    title: "Handwoven Basket",
    description: "Beautifully handwoven basket made from natural fibers. Perfect for storage or decoration.",
    image: "/images/handwoven-basket.jpg",
    artist: "Nature's Touch",
  },
  {
    id: 2,
    title: "Handcrafted Mug",
    description: "Ceramic mug with custom glazing",
    image: "/images/mug.jpg",
    artist: "Clay & Co.",
  },
];

export default async function TopProducts() {
  // functionality for showing products, uses fetch to obtain data and passes it down to the cards
  const products = mockProducts;
  return (
    <section className="mt-10">
      <h2 className={`${frederickaTheGreat.className} text-3xl mb-6`}>
        Top Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
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