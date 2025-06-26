import { cdn } from "@/utils/cdn"
import Image from "next/image"

export const Pillars = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full md:w-7/12">
                <h2 className="text-4xl text-center md:text-left text-mo-brown-base font-in-playfair mb-6">Los 7 Pilares Inluxury </h2>
                <div className="space-y-4 text-in-brown">
                    <p>Es un enfoque integral y profundamente personalizado que trasciende la estética y entra al corazón del bienestar: tu longevidad.</p>
                    <p>Nuestros 7 pilares no son servicios aislados. Son una sinfonía cuidadosamente orquestada para que te sientas y te veas en tu mejor versión, por dentro y por fuera.</p>
                </div>
            </div>
            <Image
                src={cdn("/inluxury/assets/images/sections/main/pilares-inluxuri.png")}
                alt="Los 7 Pilares InLuxury - Longevidad"
                width={500}
                height={500}
                priority  
                quality={100}
                className="w-full h-auto mx-auto max-w-[500px] md:w-5/12"
            />
        </section>
    </div>
  )
}
