import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

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
      <body className={`antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 px-4 md:px-6 lg:px-8 py-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
