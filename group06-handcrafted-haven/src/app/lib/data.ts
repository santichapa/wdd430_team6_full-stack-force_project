// import { NextResponse } from "next/server";
import { PrismaClient, Product, User } from "@prisma/client";

const prisma = new PrismaClient();

//defines a type for the props of the components
export type ProductWithArtist = Product & {
  artist: User;
};

//avoid exposing sensitive information about the artist
export type PublicArtist = Pick<User, "id" | "name" | "email" | "isArtist" | "createdAt" | "imageUrl">;

export async function getTenProducts(): Promise<ProductWithArtist[]> {
  const products = await prisma.product.findMany({
    take: 10,
    orderBy: { createdAt: "desc" }, // newest first
    include: { artist: true }, // include artist info if needed
  });
  return products;
}

// Fetch all artists
export async function getAllArtists(): Promise<PublicArtist[]> {
  return prisma.user.findMany({
    where: { isArtist: true },
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
      isArtist: true,
      createdAt: true,
      imageUrl: true,
    },
  });
}

// Fetch singular artist
export async function getArtistById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: { products: true },
  });
}
