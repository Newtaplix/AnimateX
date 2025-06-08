import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Statsbar from "@/components/statsbar";
import Navbar from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "AnimateX",
  description: "Animated components created by Ngwa Newton-Raul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="h-screen w-full bg-white flex gap-2">
            <Sidebar/>
            <div className="scrollbar-hide overflow-y-scroll relative w-full md:w-280">
              {children}
              <Navbar/>
            </div>
            <Statsbar/>
        </div>
      </body>
    </html>
  );
}
