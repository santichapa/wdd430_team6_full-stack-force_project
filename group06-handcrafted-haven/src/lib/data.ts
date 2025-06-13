import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Database types
export type PublicArtist = {
  id: string;
  name: string;
  imageUrl?: string | null;  
  description: string;
  isArtist: boolean;
};

export type ProductWithArtist = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  price: number;
  artistId: string;
  createdAt: Date;
  timesViewed: number;
  artist: {
    id: string;
    name: string;
    imageUrl?: string | null;  
  };
};

// Database functions
export async function getTenProducts(): Promise<ProductWithArtist[]> {
  return await prisma.product.findMany({
    include: {
      artist: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  }) as ProductWithArtist[];
}

export async function getArtists(): Promise<PublicArtist[]> {
  return await prisma.user.findMany({
    where: {
      isArtist: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      isArtist: true,
    },
  });
}