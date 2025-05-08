import Image from "next/image"

export const Header = () => {
  return (
    <header className="container mx-auto max-w-7xl px-4 pt-4 mb-8">
      <section className="flex flex-col md:flex-row items-center justify-between">
        <Image src="/logos/marca.png" alt="Logo" width={100} height={28} className="w-48"/>
        <nav className="hidden md:flex items-center gap-7 text-mo-brown-base">
            <a href="#beneficios">Beneficios</a>
            <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
        </nav>
      </section>
    </header>
  )
}