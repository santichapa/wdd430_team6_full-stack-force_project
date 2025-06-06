import { frederickaTheGreat } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";

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
interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  artist: string;
}

export function ProductCard({ id, title, description, image, artist }: ProductCardProps) {
  return (
    <li className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <Link href={`/products/${id}`} className="block">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-sm text-gray-500 mt-2">By {artist}</p>
        </div>
      </Link>
    </li>
  );
}
