import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { TestingRibbon } from "@/components/devmode";
import Script from "next/script";
import Footer from "@/components/footer";

import "./globals.css";
import "./bg.css";
import { appConfig } from "@/app/config";

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
          <main>
            {appConfig.dev && <TestingRibbon />}
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
