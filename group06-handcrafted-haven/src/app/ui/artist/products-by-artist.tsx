import { ProductCard } from "@/app/ui/cards";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ProductsByArtistProps {
  artistId: string; 
}

export default async function ProductsByArtist({ artistId }: ProductsByArtistProps) {
  // Fetch products for the specific artist
  const products = await prisma.product.findMany({
    where: {
      artistId: artistId,
    },
    include: {
      artist: true, 
    },
    orderBy: {
      createdAt: 'desc', 
    },
  });

  // Get the artist name from the first product (since all products belong to the same artist)
  const artistName = products.length > 0 ? products[0].artist.name : "Unknown Artist";

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{artistName}&apos;s Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">This artist hasn&apos;t created any products yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </ul>
      )}
    </section>
  );
}