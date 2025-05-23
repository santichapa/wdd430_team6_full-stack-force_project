import TopArtists from "@/app/ui/homepage/top-artists";
import TopProducts from "@/app/ui/homepage/top-products";
import Image from "next/image";
import { frederickaTheGreat } from "@/app/ui/fonts";
import { Suspense } from "react";
import { TopArtistsSkeleton, TopProductsSkeleton } from "@/app/ui/skeletons";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <Image
          src="/heroplaceholder.svg"
          width={800}
          height={400}
          alt="Placeholder hero image"
        />
      </div>
      <h1 className={`${frederickaTheGreat.className}`}>Handcrafted Haven</h1>
      {/* Maybe some text about the website?? */}
      <Suspense fallback={<TopArtistsSkeleton />}>
        <TopArtists />
      </Suspense>
      <Suspense fallback={<TopProductsSkeleton />}>
        <TopProducts />
      </Suspense>
    </main>
  );
}
