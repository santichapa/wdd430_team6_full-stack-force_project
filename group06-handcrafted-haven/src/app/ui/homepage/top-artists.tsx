import { frederickaTheGreat } from "@/app/ui/fonts";
import { ArtistCard } from "@/app/ui/cards";
import { getAllArtists } from "@/app/lib/data";

export default async function TopArtists() {
  const artists = await getAllArtists();

  return (
    <section>
      <h2 className={`${frederickaTheGreat.className}`}>Top Artists</h2>
      <ul>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </section>
  );
}
