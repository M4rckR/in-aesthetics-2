'use client'
import Image from "next/image"
import { useInhaesteticsData } from "@/store/InhaesteticsData"


export const HeroLaserTreatment = () => {
  const { openDialog } = useInhaesteticsData();
  return (
    <div className="relative min-h-[480] md:min-h-screen">
      <Image
        priority
        alt="Tratamiento laser co2"
        src="/images/hero_image.png"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#571E03] to-transparent opacity-80" />
      <div className="bottom-8 md:top-auto md:translate-y-0 absolute text-center max-w-[1200px] lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center md:bottom-12 md:space-y-4 text-white px-6 lg:px-0">
        <p className="text-lg md:text-xl">Nuestro tratamiento con</p>
        <h2 className="text-center font-in-playfair text-[42px] lg:text-6xl pb-4">Láser CO2 DEKA</h2>
        <p className="text-sm md:text-base pb-6">Es la solución más avanzada para eliminar lunares, verrugas y acrocordones sin dolor ni marcas. Es un procedimiento rápido, seguro y eficaz, realizado por especialistas en estética avanzada.</p>
        <button onClick={openDialog} className="bg-in-pink rounded-4xl py-3 px-12 block text-in-brown shadow  transition-all duration-150 hover:scale-105 animate-suave-latido cursor-pointer" >Agendar cita</button>
      </div>  
     
    </div>
  )
}
