"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 bg-white backdrop-blur-md supports-backdrop-filter:bg-white/80  border-b border-slate-200"
      )}
    >
      <div className="mx-auto flex justify-between items-center px-6 py-4 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-700 transition"
        >
        <h2 className="text-lg flex items-center gap-2 font-semibold tracking-tight">
              <div className="bg-blue-700 size-6 flex justify-end items-baseline-last">
                <div className="rounded-full size-3 bg-white"></div>
              </div>
              INSPIRE</h2>
        </Link>

        {/* Nav Links */}
        <div className="hidden sm:flex gap-6 text-sm font-medium relative">
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

                {/* Animated underline */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[1.5px] bg-blue-700 transition-all duration-300 ease-out",
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full hover:w-full"
                  )}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Placeholder (optional) */}
        <div className="sm:hidden text-neutral-500 text-sm">☰</div>
      </div>
    </nav>
  );
}
