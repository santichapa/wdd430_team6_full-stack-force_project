import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4 flex gap-6 bg-gray-100 border-b items-center">
      <Link href="/" className="font-bold text-lg hover:underline">
        Handcrafted Haven
      </Link>
      <div className="flex gap-4">
        <Link href="/products/1" className="hover:underline">
          Product #1
        </Link>
        <Link href="/products/2" className="hover:underline">
          Product #2
        </Link>
      </div>
    </nav>
  );
}
