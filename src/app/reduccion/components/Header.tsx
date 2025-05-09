import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
        <div className="container max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className="relative w-[200px] h-[75px]">
                    <Image
                        src="/logos/marca.png"
                        alt="Logo"
                        fill
                        priority
                        sizes="200px"
                        className="object-contain"
                    />
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Link className="text-mo-brown-base" href="#beneficios">Beneficios</Link>
                    <Link className="text-mo-brown-base" href="#preguntas-frecuentes">Preguntas frecuentes</Link>
                </div>
            </div>
        </div>
    </header>
  )
}
