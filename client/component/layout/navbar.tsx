"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-700 transition"
        >
          <h2 className="text-lg flex items-center gap-2 font-semibold tracking-tight">
            <div className="bg-blue-700 size-6 flex justify-end items-baseline-last">
              <div className="rounded-full size-3 bg-white" />
            </div>
            INSPOSITE
          </h2>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative transition-colors duration-200",
                  isActive
                    ? "text-blue-700"
                    : "text-neutral-500 hover:text-blue-700"
                )}
              >
                {link.name}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[1.5px] bg-blue-700 transition-all duration-300 ease-out",
                    isActive ? "w-full" : "w-0 group-hover:w-full hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden text-neutral-700 text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile popout */}
<AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-white "
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => {
                 const isActive = pathname === link.href;
                 return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)} // Close menu on click
                    className={clsx(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-blue-700" : "text-neutral-600"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
              

              
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
