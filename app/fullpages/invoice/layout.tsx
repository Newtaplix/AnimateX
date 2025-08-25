import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
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
        className={`${inter.className} top-0 w-full h-full tc antialiased`}
      >
        <div className="h-full w-full bg-white justify-between left-0 top-0">
                    {children}
        </div>
      </body>
    </html>
  );
}
