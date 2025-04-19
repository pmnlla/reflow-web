"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Get Started",
    href: "/docs",
  },
];

export default function Navbar({ docs }: { docs?: boolean }) {
  return (
    <nav className="border-b-2 border-gray-200 dark:border-gray-800 border-dashed sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="h-16 w-auto translate-y-[-12px] hover:translate-y-0 transition-all duration-300"
                src="https://assets.hackclub.com/flag-orpheus-top.svg"
                alt="Hack Club Logo"
                width={64}
                height={64}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xl font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://github.com/pmnlla/reflow" className="flex items-center" target="_blank">
              <FaGithub className="text-2xl" />
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center space-x-4 sm:hidden">
            {!docs && (
              <Drawer>
                <DrawerTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Reflow</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex flex-col space-y-4 p-4">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium hover:text-indigo-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            )}
            {docs && (
              <SidebarTrigger />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}