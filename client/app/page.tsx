"use client";

import { useState } from "react";
import Card from "@/component/ui/card";
import CardTool from "@/component/ui/toolCard";
import Header from "@/component/layout/header";
import { Container } from "@/component/ui/container";
import { sitesData } from "@/data/siteData";
import { motion } from "motion/react";
import { Filters } from "@/component/ui/filter";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 15;

  const filteredData =
    activeFilter === "All"
      ? sitesData
      : sitesData.filter((item) => item.tag === activeFilter);

  const totalPage = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function handleFilterChange(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Container>
          <Header
            title="Discover websites that"
            highlight="Inspire creativity"
            description="Discover the best developer portfolios, design ideas, and tools — all in one place."
          />

          <Filters activeFilter={activeFilter} setActiveFilter={handleFilterChange} />

          {/* GRID */}
          <motion.div
            key={activeFilter + page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          >
            {visibleItems.map((item) =>
              item.tag === "Tool" ? (
                <CardTool key={item.id} {...item} />
              ) : (
                <Card key={item.id} {...item} />
              )
            )}
          </motion.div>

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-4 mt-20 mb-20">

            <button
              onClick={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
              className={`
                h-8 w-8 flex items-center justify-center rounded-full transition
                ${page === 1
                  ? "bg-neutral-50 text-neutral-300 cursor-not-allowed"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 "}
              `}
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-sm text-neutral-500">
              {page} / {totalPage}
            </span>

            <button
              onClick={() => page < totalPage && setPage(page + 1)}
              disabled={page === totalPage}
              className={`
                h-8 w-8 flex items-center justify-center rounded-full  transition
                ${page === totalPage
                  ? "bg-neutral-100 text-neutral-300 cursor-not-allowed"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 "}
              `}
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </Container>
      </div>
    </div>
  );
}
