import Image from "next/image"
import { FormInlux } from "./FormInlux"
import { cdn } from "@/utils/cdn"

export const HeroSection = () => {
  return (
    <>
        <div className="">
            <section className="container max-w-7xl mx-auto px-4 lg:py-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-center md:text-left text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:font-medium font-in-poppins font-bold text-mo-brown-base md:text-white">Hoy el lujo no se lleva, 
                          <span className="block">se siente.</span>
                      </h1> 
                      <p className="text-mo-brown-base lg:text-lg xl:text-xl lg:w-3/6 text-center md:text-left">
                      El camino personalizado hacia una vida más larga y saludable
                      </p>
                  </div>
                    
                  <FormInlux />
                </div>

                {/* Imagen de fondo */}
                <Image
                  src="/images/banner-temporal.png"
                  alt="Banner temporal"
                  width={480}
                  height={1000}
                  className="hidden w-[300px] lg:w-[480px] md:block object-cover md:absolute bottom-0 right-0 -z-10"
                />  
                <Image
                  src="/images/banner-temporal-mobile.png"
                  alt="Banner temporal"
                  width={480}
                  height={1000}
                  className="md:hidden mx-auto"
                />  

                {/* Imagen de estrellas */}
                <Image
                  src={cdn("images/estrellas.png")}
                  alt="Estrellas"
                  width={480}
                  height={1000}
                  className="hidden w-[300px] lg:w-[480px] md:block object-cover md:absolute bottom-0 right-0 -z-10"
                />  

              </div>
            </section>
        </div>
    </>
  )
}
