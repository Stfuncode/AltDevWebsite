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
  title: "AltDev - Microsoft Fabric, Snowflake & AI Solutions | Data Platform Experts",
  description: "Microsoft-certified experts delivering Fabric, Snowflake, and Databricks solutions with AI-powered cloud innovation. Expert consultation, implementation, and corporate training for modern data platforms.",
  keywords: "Microsoft Fabric, Snowflake, Databricks, data platform, AI solutions, cloud AI, AWS AI, Azure AI, data engineering, data analytics, computer vision, machine learning, NLP, corporate training, data consulting, Microsoft certified partner",
  authors: [{ name: "AltDev Team" }],
  openGraph: {
    title: "AltDev - Microsoft Fabric, Snowflake & AI Solutions",
    description: "Microsoft-certified experts delivering modern data platform solutions and AI innovation. Specializing in Fabric, Snowflake, Databricks, and cloud AI on AWS & Azure.",
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
