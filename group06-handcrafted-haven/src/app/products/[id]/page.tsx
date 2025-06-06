import { products } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductReviewPage from "./ProductReviewPage";

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="italic mb-6">By {product.artist}</p>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="rounded"
      />

      <ProductReviewPage />
    </main>
  );
}
