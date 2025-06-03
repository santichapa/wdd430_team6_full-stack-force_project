import { ProductCard } from "@/app/ui/cards";

export default async function ProductsByArtist() {
  return (
    <div>
      <h2>Artist&apos;s Products</h2>
      {/* Display all of the artists products */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
