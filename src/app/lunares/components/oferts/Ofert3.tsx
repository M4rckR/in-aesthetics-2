import Image from "next/image"
import { useInhaesteticsData } from "@/store/InhaesteticsData"

export const Ofert3 = () => {
  const { openDialog } = useInhaesteticsData();
  return (
    <article className="relative w-full h-[360px] md:h-[400px] lg:h-[600px] flex justify-start items-end overflow-hidden">
        <div className="max-w-[1200] container mx-auto px-4 flex justify-center md:block">
            <div className="w-full md:max-w-[620px] h-full flex flex-col items-start justify-center lg:py-46 space-y-0 md:space-y-6 pb-10 ">
                <h1 className="text-white self-center md:self-start font-in-playfair md:text-left text-3xl md:text-5xl md:text-in-brown font-medium mb-4 ">Silueta Perfecta</h1>
                <div className="md:text-in-brown-light md:text-lg space-y-0  text-sm text-center md:text-left text-white self-center md:self-start mb-4">
                    <p>1 sesión de (Criolipolisis + Emsculp)</p>
                    <p>+ Consulta médica<span className="font-medium"> + evaluación corporal</span> </p>
                </div>
                <a onClick={openDialog} className="bg-in-pink py-2 md:py-3 px-8 md:px-14 md:bg-in-brown inline-block rounded-4xl self-center md:self-start text-in-brown transition-all md:text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_3.png"
            width={780}
            height={400}
            className="hidden md:block md:w-[400px] lg:w-[780px] absolute right-0"
            
        />

                {/* Overlay oscuro para móvil para mejorar la legibilidad */}
                <div className="absolute inset-0 bg-black/30 md:hidden -z-5"></div>

        {/* Imagen móvil - ocupa todo el espacio */}
        <Image
            alt="Transformación corporal móvil"
            src="/images/hero_ofert_3-mobile.png"
            width={360}
            height={400}
            className="md:hidden absolute inset-0 w-full h-full object-cover -z-10"
            priority
        />
    </article>
  )
}
