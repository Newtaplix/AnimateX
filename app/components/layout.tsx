import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/main/sidebar";
import Navbar from "@/components/main/navbar";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "Components - AnimateX",
    template: "%s | AnimateX"
  },
  description: "Explore our collection of beautiful animated components for React and Next.js. Browse buttons, cards, navigation, and more interactive elements.",
  keywords: [
    "React components",
    "Next.js components", 
    "animated components",
    "UI components",
    "interactive elements",
    "component library"
  ],
  openGraph: {
    title: 'Components - AnimateX',
    description: 'Explore our collection of beautiful animated components for React and Next.js. Browse buttons, cards, navigation, and more interactive elements.',
    images: ['/framer.png'],
  },
  twitter: {
    title: 'Components - AnimateX',
    description: 'Explore our collection of beautiful animated components for React and Next.js. Browse buttons, cards, navigation, and more interactive elements.',
    images: ['/framer.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} top-0 w-full h-full bg-[#0b0b0f] tc antialiased`}
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
