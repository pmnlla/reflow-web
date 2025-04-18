import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { TestingRibbon } from "@/components/devmode";
import Script from "next/script";
import Footer from "@/components/footer";

import "./globals.css";
import "./bg.css";

export const metadata: Metadata = {
  title: "Reflow",
  description: "Learn Reflow soldering!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Navbar />
          <main className="px-4 md:px-6 lg:px-8 py-4 w-full">
            <TestingRibbon />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <Script 
          defer 
          src="https://assets.onedollarstats.com/stonks.js"
        />
      </body>
    </html>
  );
}
