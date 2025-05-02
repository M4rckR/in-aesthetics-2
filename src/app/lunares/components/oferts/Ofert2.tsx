import Image from "next/image"
import { useInhaesteticsData } from "@/store/InhaesteticsData"

export const Ofert2 = () => {
  const { openDialog } = useInhaesteticsData();
  return (
    <article className="relative h-[360px] md:h-[400px] lg:h-[600px] flex overflow-hidden">
        <div className="max-w-[1200] container mx-auto px-4 flex justify-center md:block">
            <div className="w-full md:max-w-[620px] h-full flex flex-col items-start justify-end lg:py-46 space-y-0 md:space-y-6 pb-10">
                <h1 className="text-white self-center md:self-start font-in-playfair md:text-left text-3xl md:text-5xl md:text-in-brown font-medium mb-4 ">Transformación 360°</h1>
                <div className="md:text-in-brown-light md:text-lg space-y-0  text-sm text-center md:text-left text-white self-center md:self-start mb-4">
                    <p>1 sesión de (Criolipólisis + Exilis Ultra)</p>
                    <p>+ Consulta <span className="font-medium">médica + evaluación corporal</span> </p>
                    <p>+ BONO: Asesoría nutricional personalizada</p>
                </div>
                <a onClick={openDialog} className="bg-in-pink py-2 md:py-3 px-8 md:px-14 md:bg-in-brown inline-block rounded-4xl self-center md:self-start text-in-brown transition-all md:text-white" href="#">Agendar cita</a>
            </div>
        </div>
        
        {/* Overlay oscuro para móvil para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/30 md:hidden -z-5"></div>
        
        {/* Imagen desktop */}
        <Image
            alt="Transformación corporal"
            src="/images/hero_ofert_2.png"
            width={820}
            height={400}
            className="hidden md:block absolute -right-20  top-1/2 -translate-y-1/2 -z-10 md:w-[500px] lg:w-[740px]"
            priority
        />
        
        {/* Imagen móvil - ocupa todo el espacio */}
        <Image
            alt="Transformación corporal móvil"
            src="/images/hero_ofert_2-mobile.png"
            width={360}
            height={400}
            className="md:hidden absolute inset-0 w-full h-full object-cover -z-10"
            priority
        />
    </article>
  )
}
