import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <NavBar />
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4" >
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