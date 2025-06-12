import Image from "next/image";
import Link from "next/link";
import { ProductWithArtist, PublicArtist } from "@/app/lib/data";

export function ProductCard({ product }: { product: ProductWithArtist }) {
  return (
    <li className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 border border-mango3 flex flex-col items-center">
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-mango5 flex items-center justify-center">
        <Image
          src={product.imageUrl || "/images/placeholder.png"}
          alt={product.title}
          width={300}
          height={192}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-mango4 mb-1">{product.title}</h3>
      <p className="text-mango3 text-sm mb-2 text-center">{product.description}</p>
      <div className="flex justify-between items-center w-full">
        <span className="text-mango2 font-bold">${product.price.toFixed(2)}</span>
        <span className="text-xs text-mango4">By {product.artist.name}</span>
      </div>
    </li>
  );
}

export function ArtistCard({ artist }: { artist: PublicArtist }) {
  return (
    <li className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 border border-mango3 flex flex-col items-center">
      <div className="h-20 w-20 mb-2 rounded-full overflow-hidden bg-mango5 flex items-center justify-center">
        {artist.imageUrl ? (
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src="/images/placeholder-image-200.webp"
            alt="Placeholder"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold text-mango4">{artist.name}</h3>
      <p className="text-mango3 text-sm">{artist.email}</p>
    </li>
  );
}
