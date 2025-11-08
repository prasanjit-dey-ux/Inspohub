

export default function Navbar(){
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