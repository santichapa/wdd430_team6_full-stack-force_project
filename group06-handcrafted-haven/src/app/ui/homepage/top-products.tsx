import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";
import { getTenProducts } from "@/app/lib/data";

export default async function TopProducts() {
  const top10 = await getTenProducts();

  return (
    <section>
      <h2 className={`${frederickaTheGreat.className}`}>Top Products</h2>
      <ul>
        {top10.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
