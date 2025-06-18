"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReadProgress } from "@/components/read-progress";

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

export default function Navbar({ docs, readProgress }: { docs?: boolean, readProgress?: boolean }) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b-2 border-gray-200 dark:border-gray-800 border-dashed sticky top-0 z-50 backdrop-blur-md bg-background/80"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <Image
                className="h-16 w-auto translate-y-[-12px] hover:translate-y-0 transition-all duration-300"
                src="https://assets.hackclub.com/flag-orpheus-top.svg"
                alt="Hack Club Logo"
                width={64}
                height={64}
              />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-xl font-medium relative group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://github.com/pmnlla/reflow" className="flex items-center" target="_blank">
                <FaGithub className="text-2xl" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center space-x-4 sm:hidden">
            {!docs && (
              <Drawer>
                <DrawerTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
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
                  </motion.button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Reflow</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex flex-col space-y-4 p-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="text-lg font-medium hover:text-indigo-600 block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
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
      {readProgress && <ReadProgress />}
    </motion.nav>
  );
}