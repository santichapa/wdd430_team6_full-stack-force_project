import Image from "next/image";
import { notFound } from "next/navigation";
import ProductReviewPage from "./ProductReviewPage";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { id: true },
  });

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the product from database
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      artist: true,
    },
  });

  if (!product) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-mango4 text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2 text-dark">{product.description}</p>
      <p className="italic mb-2 text-dark">By {product.artist.name}</p>
      <p className="text-2xl font-bold text-green-600 mb-6">
        ${product.price.toFixed(2)}
      </p>

      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={400}
          className="rounded mb-6"
        />
      )}

      <ProductReviewPage productId={id} />
    </main>
  );
}
