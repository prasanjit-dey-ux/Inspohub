
import Header from "@/component/layout/header";
import Card from "@/component/ui/card";
import { sitesData } from "@/data/siteData";

export default function PortfolioPage() {
  const portfolioItems = sitesData.filter((item) => item.tag === "Portfolio");

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6">

      <Header
        title="Explore Best"
        highlight="Developer Portfolios."
        description="Discover curated portfolios of developers building beautiful, functional, and creative websites."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-20">
        {portfolioItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

