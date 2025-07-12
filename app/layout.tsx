import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "AnimateX",
  description: "Animated components created by Ngwa Newton-Raul",
  icons:{
    icon:"/myfav.ico"
  }
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
        
        <div className={`${poppins.className} max-w-7xl mx-auto relative`}>
            {children}
        </div>
      </body>
    </html>
  );
}
