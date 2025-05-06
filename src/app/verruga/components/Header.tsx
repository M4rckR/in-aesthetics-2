import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
        <div className="container max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center">
                <Image
                    src="/logos/marca.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="w-52 object-contain"
                />
                <div className="flex items-center gap-4">
                    <Link className="text-mo-brown-base" href="/">Beneficios</Link>
                    <Link className="text-mo-brown-base" href="/">Preguntas frecuentes</Link>
                </div>
            </div>
        </div>
    </header>
  )
}
