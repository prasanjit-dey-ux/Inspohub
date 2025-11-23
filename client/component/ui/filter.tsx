"use client"

import clsx from "clsx";
import { motion } from "motion/react";


const FILTERS = ["All", "Portfolio", "Inspiration", "Tools"]

//  setActiveFilter: (f: string) => void;setActiveFilter is a function and It takes a single string argument (f: string) and it returns nothing (void)
export const Filters = ({activeFilter, setActiveFilter}: {activeFilter: string, setActiveFilter: (f: string) => void}) => {
return (
   <div className="flex justify-between items-center mt-10">
      <div className="flex items-center gap-2">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
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

    <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="px-4 py-2 bg-blue-700 text-white border border-blue-600 rounded-md text-sm"
        >
          Submit
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm"
        >
          Sponsor Us
        </motion.button>
      </div>
    </div>
)
}