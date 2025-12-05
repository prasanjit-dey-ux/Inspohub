
import Header from "@/component/layout/header";
import Card from "@/component/ui/card";
import { sitesData } from "@/data/siteData";

export default function InspirationPage() {
  const ToolItems = sitesData.filter((item) => item.tag === "Tool");

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6">

      <Header
        title="Tools that actually"
        highlight="make you faster"
        description="A curated collection of websites that balance design and functionality.
Each one chosen to help developers and designers think beyond the ordinary."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-20">
        {ToolItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}