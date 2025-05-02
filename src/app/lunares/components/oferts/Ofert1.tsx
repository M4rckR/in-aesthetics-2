import Image from "next/image"
import { useInhaesteticsData } from "@/store/InhaesteticsData"

export const Ofert1 = () => {
  const { openDialog } = useInhaesteticsData();
  return (
    <article className="relative w-full h-[360px] md:h-[400px] lg:h-[600px] flex justify-start items-end overflow-hidden">
        <div className="max-w-[1200] container mx-auto px-4 h-full">
            <div className="md:max-w-[650px] lg:max-w-[820px]  flex flex-col items-start justify-center py-4 md:py-48 h-full">
                <h2 className="font-in-playfair text-2xl sm:text-3xl lg:text-5xl text-in-title-base w-4/6 sm:w-4/6 md:w-5/6 pb-4 md:pb-8 leading-7 sm:leading-none lg:leading-none">Despídete de{' '}
                    <span className="text-in-brown font-semibold">
                        lunares, verrugas y acrocordones {' '}
                    </span>
                de forma segura y sin cicatrices</h2>
                <a onClick={openDialog} className="py-2 md:py-3 px-8 md:px-14 bg-in-brown inline-block rounded-4xl text-white" href="#">Agendar cita</a>
            </div>
        </div>
        <Image
            alt="chica sin lunares"
            src="/images/hero_ofert_1.png"
            width={530}
            height={400}
            className="absolute  -right-16 -z-10 w-64 sm:-bottom-4 md:-bottom-0 sm:-right-11 sm:w-[260px]  md:-right-0 md:w-[360px] lg:w-[500px] bottom-0"
        />
    </article>
  )
}
