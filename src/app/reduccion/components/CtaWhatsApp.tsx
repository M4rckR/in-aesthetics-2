import Image from "next/image"

export const CtaWhatsApp = () => {
  return (
        <div className="container mx-auto max-w-7xl px-4 pt-8 md:pt-0 -mb-24">
            <section className="bg-mo-brown-base py-6 px-6 md:py-8  md:grid md:grid-cols-12 lg:py-12 lg:px-16 rounded-[34px] relative">
                    <div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 md:left-32">
                        <Image 
                        src="/images/moldea/doctor-sonrisa.png" 
                        alt="WhatsApp" 
                        width={200} 
                        height={200} 
                        />
                    </div>
                <div className="md:col-start-3 md:col-span-full">
                    <div className="flex flex-col lg:flex-row items-center md:items-end lg:items-center justify-end lg:gap-16 space-y-4 lg:space-y-0">
                        <p className="text-xl md:text-2xl lg:text-3xl text-center md:text-left md:pl-16 text-white font-bold lg:w-2/3 lg:pl-4">¡Elimina esas imperfecciones hoy mismo!</p>
                        <a className="flex items-center justify-center gap-4 bg-in-pink py-2 px-4 lg:p-3 rounded-4xl lg:w-1/3" href="#">
                            <Image 
                            src="/icons/button_wsp_style_2.svg" 
                            alt="WhatsApp" 
                            width={34} 
                            height={34} 
                            />
                            <p className="font-bold text-mo-brown-base ">¡Agendar una cita!</p>
                        </a>
                    </div>
                </div>
                
            </section>
                <Image 
                src="/images/moldea/doctor-sonrisa.png" 
                alt="WhatsApp" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover max-w-[300px] mx-auto md:hidden"
                />
        </div>
  )
}
