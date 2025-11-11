
'use client'

import Card  from "@/component/ui/card";
import { sitesData } from "@/data/siteData";
import CardTool from "@/component/ui/toolCard";
import Header from "@/component/layout/header";
import { motion } from "motion/react";

export default function Home() {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    
    className="min-h-screen max-w-7xl mx-auto px-6">

        <Header 
          title="Discover websites that"
          highlight="Inspire creativity"
          description="Discover the best developer portfolios, design ideas, and tools — all in one place. Get inspired and create your next big thing with confidence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-20">
        {sitesData.map((item) =>
          item.tag === "Tool" ? (
            <CardTool key={item.id} {...item} />
          ) : (
            <Card key={item.id} {...item} />
          )
        )}
        </div>
  
    </motion.div>
  );
}







