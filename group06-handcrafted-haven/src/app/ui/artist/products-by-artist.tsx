import { ProductCard } from "@/app/ui/cards";
import { PrismaClient } from "@prisma/client";

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

interface ProductsByArtistProps {
  artistId: string;
  artistName: string;
}

export default async function ProductsByArtist({
  artistId,
  artistName,
}: ProductsByArtistProps) {
  // Fetch products for the specific artist
  const products = await prisma.product.findMany({
    where: {
      artistId: artistId,
    },
    include: {
      artist: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section>
      <h2 className="text-mango4 text-2xl font-bold mb-4">
        {artistName}&apos;s Products
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-600">
          This artist hasn&apos;t created any products yet.
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: ProductWithArtist) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.imageUrl || "/images/placeholder.jpg"}
              artist={product.artist.name}
              price={product.price}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
