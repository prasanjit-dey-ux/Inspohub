"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import Pagination from "./pagination";

interface PaginatedGridProps<T> {
  data: T[];
  itemsPerPage?: number;
  renderItem: (item: T) => React.ReactNode;
  filterKey?: string;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export function PaginatedGrid<T extends { id: string | number }>({ 
  data, 
  itemsPerPage = 15, 
  renderItem,
  filterKey = "",
  currentPage: externalPage,
  onPageChange: externalOnPageChange
}: PaginatedGridProps<T>) {
  const [internalPage, setInternalPage] = useState(1);
  
  // Use external page if provided, otherwise internal
  const currentPage = externalPage ?? internalPage;
  const setCurrentPage = externalOnPageChange ?? setInternalPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        key={filterKey + currentPage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {paginatedData.map(renderItem)}
      </motion.div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </>
  );
}