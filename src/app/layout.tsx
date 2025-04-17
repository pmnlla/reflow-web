import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { TestingRibbon } from "@/components/devmode";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="px-4 md:px-6 lg:px-8 py-4 w-full">
            <TestingRibbon />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
