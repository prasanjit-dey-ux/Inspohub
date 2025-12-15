"use client";
import Header from "@/component/layout/header";
import { ActionBar } from "@/component/ui/actionBar";
import Card from "@/component/ui/card";
import { PaginatedGrid } from "@/component/ui/paginationGrid";
import { sitesData } from "@/data/siteData";

export default function InspirationPage() {
  const InspirationItems = sitesData.filter((item) => item.tag === "Inspiration");

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6">

      <Header
        title="Design Inspiration"
        highlight="Worth Studying."
        description="Every site here was chosen for one reason — it inspires.
Use these ideas to refine your next project, layout, or creative mood."
      />
      <ActionBar />
      <PaginatedGrid
        data={InspirationItems}
        itemsPerPage={15} 
        renderItem={(item) => <Card key={item.id} {...item} />}
      />
    </div>
  );
}