import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Discover unique, artisan-made treasures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mango1 min-h-screen font-sans max-w-[1400px] mx-auto flex flex-col">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
 
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     //Editing once we decide styling
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }