import TopArtists from "@/app/ui/homepage/top-artists";
import TopProducts from "@/app/ui/homepage/top-products";
import Image from "next/image";
import { Suspense } from "react";
import { TopArtistsSkeleton, TopProductsSkeleton } from "@/app/ui/skeletons";
import { frederickaTheGreat } from "@/app/ui/fonts";

export default function HomePage() {
  return (
    <main className="bg-mango1 min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      {/* <section className="w-full bg-mango2 border-b border-mango3"> */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center px-4 py-3 mt-8">
        <div className="relative flex-1 h-72 md:h-96 rounded-2xl overflow-hidden shadow-md min-w-[300px]">
          <Image
            src="/images/hero-image.webp"
            fill
            alt="A workbench with a light"
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-center px-4">
            <h1
              className={`${frederickaTheGreat.className} text-4xl md:text-6xl text-white drop-shadow-lg`}
            >
              Welcome to Handcrafted Haven
            </h1>
            <p className="text-lg md:text-2xl text-light mt-4 font-sans font-medium italic drop-shadow">
              Discover unique, artisan-made treasures
            </p>
          </div>
        </div>
      </div>
      {/* </section> */}

      {/* Top Artists Section */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto bg-white rounded-xl shadow border border-mango3 p-8 mt-12 mb-8">
          {/* <h2 className={`${frederickaTheGreat.className} text-3xl md:text-4xl text-mango4 mb-8 text-center tracking-wide`}>
            Top Artists
          </h2> */}
          <Suspense fallback={<TopArtistsSkeleton />}>
            <TopArtists />
          </Suspense>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto bg-white rounded-xl shadow border border-mango3 p-8 mb-16">
          {/* <h2 className={`${frederickaTheGreat.className} text-3xl md:text-4xl text-mango4 mb-8 text-center tracking-wide`}>
            Top Products
          </h2> */}
          <Suspense fallback={<TopProductsSkeleton />}>
            <TopProducts />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
