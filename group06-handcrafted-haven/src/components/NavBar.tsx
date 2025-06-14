import Link from "next/link";
import { frederickaTheGreat } from "@/app/ui/fonts";

export default function NavBar() {
  return (
    <nav className="py-2 px-4 flex gap-4 bg-white border-b border-mango3 items-center">
      <Link
        href="/"
        className={`${frederickaTheGreat.className} text-2xl hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition`}
      >
        Handcrafted Haven
      </Link>
      <div className="flex gap-2">
        <Link
          href="/products"
          className="hover:text-white hover:bg-mango4 px-3 py-1.5 rounded transition"
        >
          Browse
        </Link>
      </div>
    </nav>
  );
}
