import { cdn } from "@/utils/cdn"
import Image from "next/image"

export const Benefits = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <section  data-aos="fade-up" data-aos-delay="0" className="shadow-xl rounded-3xl py-8 px-4 md:px-12 md:py-12 lg:py-16 lg:px-16 space-y-8 md:space-y-12">
        <div>
            <h2 className="text-4xl text-center text-mo-brown-base font-in-playfair mb-4">¿Por qué elegir In Luxury?</h2>
            <p className="text-center text-in-brown text-lg">En In Luxury, diseñamos experiencias de salud que no se repiten, porque están hechas solo para ti.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <video 
              src="/video/inluxury-pillars.mp4" 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover rounded-3xl"
              title="Video de tratamientos InLuxury - Medicina estética avanzada"
              aria-label="Video mostrando los pilares y tratamientos de InLuxury"
            />
            <div className="space-y-4">
                <article className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={cdn("/inluxury/assets/images/sections/main/u-brown-start.svg")}
                            alt="Icono de estrella para experiencia exclusiva"
                            width={8}
                            height={8}
                            quality={100}
                            className="w-10 h-10 object-cover"
                        />
                        <h3 className="text-lg text-mo-brown-base font-medium">Experiencia exclusiva</h3>
                    </div>
                    <p className="pl-12 text-in-brown">Espacios minimalistas y elegantes creados para tu comodidad y privacidad.</p>
                </article>
                <article className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={cdn("/inluxury/assets/images/sections/main/u-brown-start.svg")}
                            alt="Icono de estrella para profesionales certificados"
                            width={8}
                            height={8}
                            quality={100}
                            className="w-10 h-10 object-cover"
                        />
                        <h3 className="text-lg text-mo-brown-base font-medium">Profesionales certificados</h3>
                    </div>
                    <p className="pl-12 text-in-brown">Expertos en salud, estética y belleza comprometidos con tu bienestar.</p>
                </article>
                <article className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Image 
                            src={cdn("/inluxury/assets/images/sections/main/u-brown-start.svg")}
                            alt="Icono de estrella para resultados naturales"
                            width={8}
                            height={8}
                            quality={100}
                            className="w-10 h-10 object-cover"
                        />
                        <h3 className="text-lg text-mo-brown-base font-medium">Resultados visibles y naturales</h3>
                    </div>
                    <p className="pl-12 text-in-brown">Enfoque en realzar tu belleza auténtica, sin exageraciones.</p>
                </article>
            </div>
        </div>

        
      </section>
    </div>
  )
}
