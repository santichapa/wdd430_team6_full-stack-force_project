import { frederickaTheGreat } from "@/app/ui/fonts";
import { ArtistCard } from "@/app/ui/cards";
import { getAllArtists } from "@/app/lib/data";

export default async function TopArtists() {
  const artists = await getAllArtists();

  return (
    <section>
      <h2
        className={`${frederickaTheGreat.className} text-4xl md:text-5xl text-mango4 mb-8 text-center tracking-wide drop-shadow`}
      >
        Top Artists
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </section>
  );
}
