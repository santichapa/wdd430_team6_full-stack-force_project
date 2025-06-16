import ProductsByArtist from "@/app/ui/artist/products-by-artist";
import { frederickaTheGreat } from "@/app/ui/fonts";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the artist information
  const artist = await prisma.user.findUnique({
    where: {
      id: id,
      isArtist: true,
    },
  });

  // If artist not found, show 404
  if (!artist) {
    return notFound();
  }

  return (
    <main className="p-6">
      <div className="mb-8">
        <section className="text-center mb-8">
          <h1
            className={`${frederickaTheGreat.className} text-mango4 text-4xl mb-2`}
          >
            {artist.name}
          </h1>
          <h2 className="text-mango4 text-xl text-600 mb-4">
            @{artist.email.split("@")[0]}
          </h2>
          <p className="text-dark text-700 max-w-2xl mx-auto">
            {/* Welcome to {artist.name}&apos;s handcrafted collection. Each piece
            is carefully crafted with attention to detail and passion for the
            art. */}
            {artist.description}
          </p>
        </section>
      </div>

      <ProductsByArtist artistId={id} artistName={artist.name} />
    </main>
  );
}
