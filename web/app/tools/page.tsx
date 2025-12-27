"use client";
import Header from "@/component/layout/header";
import { ActionBar } from "@/component/ui/actionBar";
import Card from "@/component/ui/card";
import { PaginatedGrid } from "@/component/ui/paginationGrid";
import { sitesData } from "@/data/siteData";



export default function InspirationPage() {
  const ToolItems = sitesData.filter((item) => item.tag === "Tool");

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6">

      <Header
        title="Tools That Actually "
        highlight="Save Time"
        description="AI tools, design utilities, and resources that make your workflow faster. Handpicked for developers and designers who want to ship better work."
      />
      <ActionBar />
      <PaginatedGrid 
        data={ToolItems}
        itemsPerPage={15}
        renderItem={(item) => <Card key={item.id} {...item}/>}
      />


    </div>
  );
}