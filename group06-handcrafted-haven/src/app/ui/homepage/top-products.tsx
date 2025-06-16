import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";
import { PrismaClient } from '@prisma/client';


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
    take: 4, 
  });

  return (
    <section>
      <h2
        className={`${frederickaTheGreat.className} text-4xl md:text-5xl text-mango4 mb-8 text-center tracking-wide drop-shadow`}
      >
        Top Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: ProductWithArtist) => (
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
      </ul>
    </section>
  );
}