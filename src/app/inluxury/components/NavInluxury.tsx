import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"

export const NavInluxury = () => {
  return (
    <div className="relative z-10 mb-8 lg:mb-10 xl:mb-12">
        <nav className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center font-in-poppins">
                <section className="flex items-center gap-12 pt-8">
                    <div className="gap-8 hidden md:flex">
                        <Link href="/">Nosotros</Link>
                        <Link href="/">Servicios</Link>
                    </div>
                    
                    <Link href="/">
                        <Image 
                        src={cdn("/shared/logos/logo-inluxury.png")} 
                        alt="logo InLuxury" 
                        width={240} 
                        height={149} 
                        className="w-60"
                        quality={95}
                        priority={true}
                        
                        />
                    </Link>
                    <div className="gap-8 hidden md:flex">
                        <Link href="/">Contacto</Link>
                        <Link href="/">Agendar</Link>
                    </div>
                </section>


            </div>
        </nav>
    </div>
  )
}
