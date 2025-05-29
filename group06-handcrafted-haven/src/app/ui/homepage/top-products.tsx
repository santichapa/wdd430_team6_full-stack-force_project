import { frederickaTheGreat } from "@/app/ui/fonts";
import { ProductCard } from "@/app/ui/cards";

export default async function TopProducts() {
  // functionality for showing products, uses fetch to obtain data and passes it down to the cards
  return (
    <section>
      <h2 className={`${frederickaTheGreat.className}`}>Top Products</h2>
      <ul>
        {/* .map product card */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </section>
  );
}
