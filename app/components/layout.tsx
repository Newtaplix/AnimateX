import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";



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
        className={`${poppins.className} top-0 w-full h-full bg-[#0b0b0f] tc antialiased`}
      >
        <div className="h-screen fixed w-full justify-between flex md:gap-4 left-0 top-0 bg-[#0b0b0f]">
           <div className="w-fit">
              <Sidebar/>
           </div>
            <div className="overflow-hidden w-[100%] md:flex-1 h-full">
                <div className="w-full px-2 md:px-0 md:max-w-5xl md:mx-auto">
                  <div className='md:hidden'><Navbar/></div>
                    {children}
                </div>
            </div>
          
        </div>
      </body>
    </html>
  );
}
