"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

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

export default function Navbar() {

  return (
    <nav className="shadow-sm border-b-2 border-gray-200 border-dashed">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Image
              className="h-16 w-auto"
              src="https://assets.hackclub.com/flag-orpheus-top.svg"
              alt="Hack Club Logo"
              width={64}
              height={64}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xl font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="sm:hidden">
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
          </div>
        </div>
      </div>
    </nav>
  );
}