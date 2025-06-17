import { PrismaClient } from "@prisma/client";
import { ArtistCard } from "@/app/ui/cards";
import { frederickaTheGreat } from "@/app/ui/fonts";

const prisma = new PrismaClient();

export default async function ArtistsPage() {
  const artists = await prisma.user.findMany({
    where: {
      isArtist: true,
    },
  });

  return (
    <main className="p-6">
      <h1
        className={`${frederickaTheGreat.className} text-5xl text-mango4 mb-4`}
      >
        All Artists
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </main>
  );
}
