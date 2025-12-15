"use client"

import clsx from "clsx";
import { Github, Plus } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const FILTERS = ["All", "Portfolio", "Inspiration", "Tool"]

//  setActiveFilter: (f: string) => void;setActiveFilter is a function and It takes a single string argument (f: string) and it returns nothing (void)
export const Filters = ({activeFilter, setActiveFilter}: {activeFilter: string, setActiveFilter: (f: string) => void}) => {
return (
   <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 mt-10 mb-10">
      <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap shrink-0",
                isActive
                  ? "bg-neutral-100 text-blue-700"
                  : " text-neutral-600 hover:bg-neutral-100"
              )}
            >
              {filter}
            </motion.button>
          );
        })}
      </div>

    <div className="flex gap-3 flex-col sm:flex-row w-full md:w-auto">
      <Link href="https://forms.gle/1sXts1npiiwmzvzr5" target="_blank" className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-700 text-white border border-blue-600 border-t-2 border-t-blue-600 rounded-md text-sm font-medium"
        >
          <div className="flex justify-center sm:justify-between items-center gap-2">
            <Plus size={16} strokeWidth={2.5} /> {/* Made stroke slightly thicker for impact */}
              Submit your site
          </div>
        </motion.button>
      </Link>


      <Link href="https://github.com/prasanjit-dey-ux/Insposite.git" target="_blank" className="w-full sm:w-auto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="w-full sm:w-auto px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium"
        >
          <div className="flex sm:justify-between justify-center items-center gap-2">
           <Github size={16}/>
          Star on Github  
          </div>
        </motion.button>
      </Link>
      </div>
    </div>
)
}