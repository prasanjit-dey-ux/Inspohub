"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteItem } from "@/types/site";

export default function CardToolCompact({ title, url, logo, creator, description }: SiteItem) {
  return (
    <Link href={url} target="_blank">
      <div className="border border-slate-300 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition group">
        <div className="flex items-center gap-4">
          {logo && (
            <Image
              src={logo}
              width={40}
              height={40}
              alt={title}
              className="rounded-md"
            />
          )}
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            {description && (
              <p className="text-xs text-zinc-500">{description}</p>
            )}
          </div>
        </div>

        <span className="text-xl text-zinc-400 group-hover:text-zinc-600 transition">
          →
        </span>
      </div>
    </Link>
  );
}
