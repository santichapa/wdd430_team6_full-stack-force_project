import Link from "next/link";
// import Image from "next/image";
import { ProductWithArtist, PublicArtist } from "@/app/lib/data";

type ProductCardProps = {
  product: ProductWithArtist;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li>
      {/* link to product page */}
      <Link href="#">
        <div>
          {/* cannot display image since they are placeholders from external sources */}
          {/* {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
            />
          )} */}
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    </li>
  );
}

export function ArtistCard({ artist }: PublicArtist) {
  return (
    <li>
      <Link href={`/artist/${artist.id}`}>
        {/* artist profile picture */}
        <h3>{artist.name}</h3>
        <p>{artist.email}</p>
      </Link>
    </li>
  );
}
