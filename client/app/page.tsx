"use client";

import { useState } from "react";
import Card from "@/component/ui/card";
import CardTool from "@/component/ui/toolCard";
import Header from "@/component/layout/header";
import { Container } from "@/component/ui/container";
import { sitesData } from "@/data/siteData";
import { motion } from "motion/react";
import { Filters }from "@/component/ui/filter";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? sitesData
      : sitesData.filter((item) => item.tag === activeFilter);

  return (
    <div className="relative min-h-screen overflow-hidden">

    <div className="relative z-10">
      
      <Container>
        <Header
          title="Discover websites that"
          highlight="Inspire creativity"
          description="Discover the best developer portfolios, design ideas, and tools — all in one place. Get inspired and create your next big thing with confidence."
        />

        <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}

        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20">
          {filteredData.map((item) =>
            item.tag === "Tool" ? (
              <CardTool key={item.id} {...item} />
            ) : (
              <Card key={item.id} {...item} />
            )
          )}
        </motion.div>
      </Container>
    </div>
    </div>
  );
}
