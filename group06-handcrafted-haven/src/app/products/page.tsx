import { PrismaClient } from '@prisma/client';
import ProductsPageClient from './ProductsPageClient';

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
};

export default async function ProductsPage() {
  // Fetch all products with artist info (server-side)
  const products = await prisma.product.findMany({
    include: {
      artist: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  }) as ProductWithArtist[];

  // Pass products to client component for filtering
  return <ProductsPageClient initialProducts={products} />;
}