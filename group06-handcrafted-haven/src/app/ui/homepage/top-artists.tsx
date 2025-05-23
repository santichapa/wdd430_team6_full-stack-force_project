import { frederickaTheGreat } from "@/app/ui/fonts";
import Link from "next/link";

export default async function TopArtists() {
  // functionality for showing artists
  return (
    <section>
      <h2 className={`${frederickaTheGreat.className}`}>Top Artists</h2>
      <ul>
        {/* .map artist card */}
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </ul>
    </section>
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
