import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTenProducts() {
  const products = await prisma.product.findMany({
    take: 10,
    orderBy: { createdAt: "desc" }, // newest first
    include: { artist: true }, // include artist info if needed
  });
  return NextResponse.json(products);
}

// Fetch all artists
export async function getAllArtists() {
  return prisma.user.findMany({
    where: { isArtist: true },
    orderBy: { name: "asc" },
  });
}