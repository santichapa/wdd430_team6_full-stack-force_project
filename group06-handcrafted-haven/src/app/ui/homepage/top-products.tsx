import { frederickaTheGreat } from "@/app/ui/fonts";
import Link from "next/link";

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

export function ProductCard() {
  //uses props to populate i.e title, image, description
  return (
    <li>
      {/* link to product page */}
      <Link href="#">
        <div>
          {/* Picture from product */}
          <h3>Product title</h3>
          <p>Product description</p>
          {/* should artist name also appear? */}
        </div>
      </Link>
    </li>
  );
}
