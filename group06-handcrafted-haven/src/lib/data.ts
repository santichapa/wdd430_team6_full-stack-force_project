import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Database types
export type PublicArtist = {
  id: string;
  name: string;
  imageUrl?: string;
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
    imageUrl?: string;
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
          imageUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  });
}

export async function getArtists(): Promise<PublicArtist[]> {
  return await prisma.user.findMany({
    where: {
      isArtist: true,
    },
    select: {
      id: true,
      name: true,
      imageUrl: true,
      description: true,
      isArtist: true,
    },
  });
}