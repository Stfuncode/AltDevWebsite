import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "AltDev - Innovative Technology Solutions",
  description: "AltDev delivers cutting-edge technology solutions for modern businesses. Web development, mobile apps, cloud solutions, and AI integration.",
  keywords: "technology, web development, mobile apps, cloud solutions, AI, software development",
  authors: [{ name: "AltDev Team" }],
  openGraph: {
    title: "AltDev - Innovative Technology Solutions",
    description: "AltDev delivers cutting-edge technology solutions for modern businesses.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{margin: 0, padding: 0, width: '100%', height: '100%'}}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{margin: 0, padding: 0, width: '100%', minHeight: '100vh'}}
      >
        <Navbar />
        <main className="flex-grow" style={{margin: 0, padding: 0, width: '100%'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
