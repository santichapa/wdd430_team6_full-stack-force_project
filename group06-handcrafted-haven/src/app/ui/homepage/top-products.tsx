import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function TopProducts() {
  // Fetch top products from database - showing most recently created products
  const products = await prisma.product.findMany({
    include: {
      artist: true, 
    },
    orderBy: {
      createdAt: 'desc', 
    },
    take: 5, // Limit to 5 products for the homepage
  });

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
            image={product.imageUrl || '/images/placeholder.jpg'} // Fallback image
            artist={product.artist.name}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
}