import clsx from "clsx";
import Image from "next/image";
import { Card } from "@/component/ui/card";


export default function Home() {
  return (
    
    <div className="min-h-screen max-w-7xl mx-auto px-6">
        <Navbar />
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-20">
          <div>
            <Card 
            src="/images/img3.jpg"
            title="Appinspo"
            tag="Inspiration"
            
            />
          </div>
          <div>
            <Card 
            src="/images/img4.jpg"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                    <div>
            <Card 
            src="/images/img5.jpg"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                              <div>
            <Card 
            src="/images/img6.png"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                                        <div>
            <Card 
            src="/images/img7.jpg"
            title="Appinspo"
            tag="Inspiration"
            />
          </div>
                                        <div>
            <Card 
            src="/images/img8.jpg"
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
    <div className="pt-64 pb-10">
      <h1 className="text-6xl font-medium  text-neutral-950 tracking-tight uppercase max-w-3xl">
        Discover websites that{" "}
        <span className="text-neutral-400">Inspire creativity.</span>
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
      <nav className="py-6">
          <div className=" max-w-7xl mx-auto flex justify-between items-center">
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

