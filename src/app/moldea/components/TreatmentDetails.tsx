import Image from "next/image"

export const TreatmentDetails = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 md:px-32 mb-16 md:mb-32 relative">

        <div className="flex flex-col gap-8 md:flex-row justify-between mx-auto md:rounded-tl-full md:rounded-bl-full bg-in-pink pb-8 sm:pb-12 px-4 sm:px-12 md:px-0 md:pb-0">
            <div className="w-full md:w-7/12">
            <div className="md:absolute md:w-1/2  md:top-1/2 md:-translate-y-1/2 md:left-12 pt-8 sm:pt-12 md:pt-0 md:px-0">
                <p className="text-lg">Nuestro tratamiento con</p>
                <h1 className="font-in-playfair text-4xl lg:text-5xl pb-4">Láser CO2 DEKA</h1>
                <p className="text-mo-brown-base">Es la solución más avanzada para eliminar lunares, verrugas y acrocordones sin dolor ni marcas. Es un procedimiento rápido, seguro y eficaz, realizado por especialistas en estética avanzada.
                </p>
            </div>
            </div>
            <Image 
                src="/images/treatment-co2.png" 
                alt="Láser CO2 Deka" 
                className="w-full max-w-[400px] md:w-5/12"
                width={100} height={100} />
        </div>
    </section>
  )
}
