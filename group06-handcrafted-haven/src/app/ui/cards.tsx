import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  artist: string;
}

export function ProductCard({ id, title, description, image, artist }: ProductCardProps) {
  return (
    <li className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <Link href={`/products/${id}`} className="block">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-sm text-gray-500 mt-2">By {artist}</p>
        </div>
      </Link>
    </li>
  );
}

export function ArtistCard() {
  return (
    <li>
      {/* link to the artists profile */}
      <Link href="#">
        {/* artist profile picture */}
        <h3>Username</h3>
      </Link>
    </li>
  );
}