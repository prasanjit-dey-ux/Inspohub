
type HeaderProps = {
    title: string
    highlight: string
    description: string
}

export default function Header({title, description, highlight}: HeaderProps){
  return (
    <div className="pt-76 pb-10">
      <h1 className="text-6xl font-medium  text-neutral-950 tracking-tight uppercase  max-w-3xl">
        {title}{" "}
        <br />
        <span className="text-neutral-400">{highlight}</span>
      </h1>
      <p className="text-neutral-400 text-base max-w-xl mt-6">
        {description}
      </p>
  </div>
  )
}
