import { frederickaTheGreat } from "@/app/ui/fonts";
import { ArtistCard } from "@/app/ui/cards";

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
