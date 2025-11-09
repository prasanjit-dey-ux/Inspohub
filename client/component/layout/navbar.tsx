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
        "sticky top-0 z-50 border-b border-neutral-100",
        "bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-700 transition"
        >
          INSPIRE
        </Link>

        {/* Nav Links */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "transition-colors hover:text-black text-neutral-500",
                pathname === link.href && "text-black font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Placeholder (optional) */}
        <div className="sm:hidden text-neutral-500 text-sm">☰</div>
      </div>
    </nav>
  );
}
