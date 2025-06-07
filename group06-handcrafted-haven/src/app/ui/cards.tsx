import Link from "next/link";

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
