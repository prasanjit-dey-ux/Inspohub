import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 ">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-start mt-2">
        

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-lg flex items-center gap-2 font-semibold tracking-tight">
              <div className="bg-blue-700 size-6 flex justify-end items-baseline-last">
                <div className="rounded-full size-4 bg-white"></div>
              </div>
              INSPIIRE</h2>
            <p className="mt-2 text-neutral-500 max-w-xs">
              Curated inspiration for developers who think visually.
            </p>
          </div>


          <p className="font-serif text-xl text-blue-700">
            crafted with care — Prasanjit Dey
          </p>
        </div>

        <div className="flex flex-col gap-2 text-right">



          <div className="mt-2 flex flex-col gap-2 text-sm">
            <Link href="https://github.com" className="hover:text-blue-700 text-neutral-500">
              GitHub
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-700 text-neutral-500">
              Twitter
            </Link>
            <Link href="/sponsor" className="hover:text-blue-700 text-neutral-500">
              Sponsor
            </Link>
  
          </div>
        </div>

      </div>

      <p className="mt-10 text-center text-sm text-neutral-500">
        © 2025 INSPIRE — All content belong to their original owner.
      </p>
    </footer>
  );
}
