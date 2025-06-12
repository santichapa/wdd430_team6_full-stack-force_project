import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";
import { getTenProducts } from "@/app/lib/data";

export default async function TopProducts() {
  const top10 = await getTenProducts();

  return (
    <section>
      <h2
        className={`${frederickaTheGreat.className} text-4xl md:text-5xl text-mango4 mb-8 text-center tracking-wide drop-shadow`}
      >
        Top Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {top10.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
