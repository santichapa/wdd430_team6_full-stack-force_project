import ProductsByArtist from "@/app/ui/artist/products-by-artist";
import Image from "next/image";
import { frederickaTheGreat } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <main>
      <div>
        {/* artist profile picture, maybe centered? */}
        <section>
          <h1 className={frederickaTheGreat.className}>Display name</h1>
          <h2>Username</h2>
          <p>
            Some description that the user can write talking about themselves
            and their products
          </p>
        </section>
      </div>
      <ProductsByArtist />
    </main>
  );
}
