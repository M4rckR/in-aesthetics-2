import Image from "next/image"

export const TreatmentDetails = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 mb-16">
        <div className="flex flex-col gap-8 md:flex-row justify-between max-w-4xl mx-auto items-center bg-in-pink rounded-tl-3xl rounded-bl-5xl">
            <div className="w-7/12 relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0">
                <p className="text-lg">Nuestro tratamiento con</p>
                <h1 className="font-in-playfair text-5xl pb-4">Láser CO2 DEKA</h1>
                <p className="text-mo-brown-base">Es la solución más avanzada para eliminar lunares, verrugas y acrocordones sin dolor ni marcas. Es un procedimiento rápido, seguro y eficaz, realizado por especialistas en estética avanzada.
                </p>
            </div>
               
            </div>
            <Image 
                src="/images/treatment-co2.png" 
                alt="Láser CO2 Deka" 
                className="w-5/12"
                width={100} height={100} />
        </div>
    </section>
  )
}
