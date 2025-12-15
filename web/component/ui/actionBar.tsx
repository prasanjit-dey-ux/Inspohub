"use client";

import { Github, Plus } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const ActionBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-end gap-3 mt-10 mb-10">
      <Link href="https://forms.gle/1sXts1npiiwmzvzr5" target="_blank">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="w-full px-4 py-2 bg-blue-700 text-white border border-blue-600 border-t-2 border-t-blue-600 rounded-md text-sm font-medium"
        >
        <div className="flex justify-center sm:justify-between items-center gap-2">
          <Plus size={16} strokeWidth={2.5} /> {/* Made stroke slightly thicker for impact */}
              Submit your site
          </div>
        </motion.button>
      </Link>

      <Link href="https://github.com/prasanjit_dey_ux/" target="_blank">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          
          className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 border-t-2 border-t-neutra;-800 text-white rounded-md text-sm font-medium"
        >
          <div className="flex justify-center items-center gap-2">
           <Github size={16}/>
            Star on Github  
          </div>
        </motion.button>
      </Link>
    </div>
  )
}