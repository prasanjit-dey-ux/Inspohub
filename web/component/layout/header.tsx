
type HeaderProps = {
    title: string
    highlight: string
    description: string
}

export default function Header({title, description, highlight}: HeaderProps){
  return (
    <div className="pt-20 pb-10 md:pt-24">
      <h1 className="md:text-6xl text-4xl font-jakarta font-semibold md:leading-16  text-neutral-900 tracking-tight max-w-5xl">
        {title}{" "}
        <br />
        <span className=" text-blue-700 font-serif font-medium">{highlight}</span>
      </h1>
      <p className="text-neutral-400 md:text-base text-sm max-w-xl mt-6">
        {description}
      </p>
  </div>
  )
}
