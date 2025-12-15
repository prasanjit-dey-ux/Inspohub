export type SiteItem = {
  id: string;
  title: string;
  tag: "Inspiration" | "Portfolio" | "Tool";
  url: string;
  creator: string;
  className?: string
  image?: string; 
  logo?: string;  
  description?: string; 
};
