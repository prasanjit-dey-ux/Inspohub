import clsx from "clsx";
import Image from "next/image";
import { Card } from "@/component/ui/card";


export default function Home() {
  return (
    
    <div className=" h-screen max-w-7xl mx-auto ">
        <Navbar />
        <Header />
        <div className="grid grid-cols-3 mt-6 gap-4">
          <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            
            />
          </div>
          <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                    <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                              <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                                        <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                                        <div>
            <Card 
            src="/images/img1.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
        </div>
  
    </div>
  );
}

const Header = () => {
return (
    <div className="py-20 pb-10 mt-40">
      <h1 className="text-6xl font-medium text-neutral-950 tracking-tight uppercase max-w-3xl">
        Discover websites that <span className="text-neutral-400">inspire creativity.</span>
      </h1>
      <p className="text-neutral-500 text-base max-w-xl mt-6">
        Discover the best developer portfolios, design ideas, and tools — all in one place. Get inspired and create your next big thing with confidence.
      </p>
  </div>
)
}

const Navbar =  () => {
  return (
    <>
      <nav>
          <div className=" h-18 flex justify-between items-center ">
          <h1 className="font-medium text-xl text-neutral-950 ">INSPIRE</h1>
          <div className="flex gap-6 text-neutral-500 text-base ">
            <p>Home</p>
            <p>Portfolio</p>
            <p>Inspiration</p>
            <p>Tools</p>
            <p>About</p>
          </div>

        </div>
      </nav>
    </>
  )
}

