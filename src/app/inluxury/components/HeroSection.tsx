import Image from "next/image"
import { FormInlux } from "./FormInlux"
import { cdn } from "@/utils/cdn"

interface HeroSectionProps {
  emailDestino?: string;
  paginaOrigen?: string;
}

export const HeroSection = ({ emailDestino, paginaOrigen }: HeroSectionProps) => {
  return (
    <>
        <div>
            <section className="container max-w-7xl mx-auto px-4 lg:pt-12">
              <div  className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div data-aos="fade-up" data-aos-delay="0" className="md:col-span-10 lg:col-span-8 space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-center md:text-left text-3xl md:text-5xl lg:text-5xl xl:text-[60px] md:font-medium font-in-poppins font-bold text-mo-brown-base md:text-white">Hoy el lujo no se  
                          <span className="block">lleva, se siente.</span>
                      </h1> 
                      <p className="text-mo-brown-base lg:text-lg xl:text-xl lg:w-3/6 text-center md:text-left">
                      El camino personalizado hacia una vida más larga y saludable
                      </p>
                  </div>
                    
                  <FormInlux emailDestino={emailDestino} paginaOrigen={paginaOrigen} />
                </div>

                {/* Imagen de fondo */}
                <Image
                  src={cdn("inluxury/assets/images/sections/header/u-banner-hero-main.png")}
                  alt="InLuxury - Medicina estética avanzada y experiencias de lujo para una vida más saludable"
                  width={480}
                  height={1000}
                  className="hidden w-full h-full lg:h-auto md:block object-cover md:absolute left-0  top-0 bottom-0 right-0 -z-20"
                  priority
                  unoptimized
                />  

                <Image
                  src="/images/banner-temporal-mobile.png"
                  alt="InLuxury - Medicina estética avanzada y experiencias de lujo para una vida más saludable"
                  width={480}
                  height={1000}
                  className="md:hidden mx-auto"
                />  

                {/* Imagen de estrellas */}
                <Image
                  src={cdn("inluxury/assets/images/sections/header/u-big-star.svg")}
                  alt="Elemento decorativo estrella - InLuxury"
                  width={80}
                  height={80}
                  className="hidden xl:block absolute w-28 top-2/12 -translate-y-2/12 left-8"
                />  
                <Image
                  src={cdn("inluxury/assets/images/sections/header/u-medium-star.svg")}
                  alt="Elemento decorativo estrella - InLuxury"
                  width={80}
                  height={80}
                  className="hidden xl:block absolute w-20 top-3/6 -translate-y-1/5 left-6/12 -translate-x-4/12"
                />  

              </div>
            </section>
        </div>
    </>
  )
}
