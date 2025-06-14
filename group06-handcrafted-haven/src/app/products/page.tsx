import { frederickaTheGreat } from "@/app/ui/fonts";
import { Suspense } from "react";
import { TopProductsSkeleton } from "@/app/ui/skeletons";
import TopProducts from "@/app/ui/homepage/top-products";

export default async function ProductsBrowsePage() {
  return (
    <main>
      <div className="max-w-[1400px] mx-auto bg-white rounded-xl shadow border border-mango3 p-8 mt-12 mb-8">
        <h1 className={`${frederickaTheGreat.className} text-4xl md:text-5xl`}>
          Browse available products
        </h1>
        <p className="text-lg md:text-xl text-mango4 mt-4 font-sans font-medium italic">
          All handcrafted and made with love, for you!
        </p>
      </div>

      {/* search bar component */}
      <Suspense fallback={<TopProductsSkeleton />}>
        <TopProducts />
      </Suspense>
    </main>
  );
}
