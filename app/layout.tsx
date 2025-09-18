import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "AnimateX - Beautiful Animated Components for React & Next.js",
    template: "%s | AnimateX"
  },
  description: "Discover stunning animated components for React and Next.js. Created by Ngwa Newton-Raul. Features buttons, cards, navigation, and more with smooth animations powered by Framer Motion.",
  keywords: [
    "React components",
    "Next.js components", 
    "animated components",
    "Framer Motion",
    "UI components",
    "interactive elements",
    "web animations",
    "React library",
    "component library"
  ],
  authors: [{ name: "Ngwa Newton-Raul" }],
  creator: "Ngwa Newton-Raul",
  publisher: "AnimateX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://animatex.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://animatex.vercel.app',
    title: 'AnimateX - Beautiful Animated Components for React & Next.js',
    description: 'Discover stunning animated components for React and Next.js. Features buttons, cards, navigation, and more with smooth animations powered by Framer Motion.',
    siteName: 'AnimateX',
    images: [
      {
        url: '/framer.png',
        width: 1200,
        height: 630,
        alt: 'AnimateX - Animated Components Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimateX - Beautiful Animated Components for React & Next.js',
    description: 'Discover stunning animated components for React and Next.js. Features buttons, cards, navigation, and more with smooth animations powered by Framer Motion.',
    images: ['/framer.png'],
    creator: '@yourusername', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/myfav.ico',
    shortcut: '/myfav.ico',
    apple: '/myfav.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AnimateX",
              "description": "Beautiful animated components for React and Next.js",
              "url": "https://animatex.vercel.app",
              "author": {
                "@type": "Person",
                "name": "Ngwa Newton-Raul"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AnimateX"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://animatex.vercel.app/components?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className={`${poppins.className} max-w-7xl mx-auto relative`}>
            {children}
        </div>
 </ThemeProvider>
      </body>
    </html>
  );
}
