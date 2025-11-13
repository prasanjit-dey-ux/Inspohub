
'use client'

import Card  from "@/component/ui/card";
import { sitesData } from "@/data/siteData";
import CardTool from "@/component/ui/toolCard";
import Header from "@/component/layout/header";
import { motion } from "motion/react";
import { Container } from "@/component/ui/container";

export default function Home() {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    
    className="">
      <Container>

        <Header 
          title="Discover websites that"
          highlight="Inspire creativity"
          description="Discover the best developer portfolios, design ideas, and tools — all in one place. Get inspired and create your next big thing with confidence."
        />
        <div className="flex justify-between items-center mt-20">
          <div className="flex items_center w-full gap-2"  >
          <div className="flex justify-center items-center px-4 py-1 bg-neutral-100 text-blue-700  rounded-md">All</div>
            <div className="flex justify-center items-center px-4 py-2 bg-neutral-50rounded-md">Portfolio</div>
            <div className="flex justify-center items-center px-4 py-2 bg-neutral-50  rounded-md">Inspiration</div>
              <div className="flex justify-center items-center px-4 py-2 bg-neutral-50   rounded-md">Tools</div>
        </div>
        <div>
          <button className="flex justify-center items-center px-4 py-2 bg-blue-700 text-white border border-blue-500  rounded-md">Submit</button>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20">
        {sitesData.map((item) =>
          item.tag === "Tool" ? (
            <CardTool key={item.id} {...item} />
          ) : (
            <Card key={item.id} {...item} />
          )
        )}
        </div>
      </Container>
  
    </motion.div>
  );
}







