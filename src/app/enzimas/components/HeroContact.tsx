import Image from "next/image"
import { ContactForm } from "./ContactForm"

export const HeroContact = () => {

  return (
    <section data-aos="fade-up" data-aos-delay="0" className="container mx-auto max-w-7xl px-4 pt-4 mb-16 lg:px-36">
        <div className="flex flex-col items-center md:flex-row gap-4">
          <div className="hidden md:block relative w-full max-w-[460px] aspect-square mx-auto">
            <Image 
                src="/images/reduccion/doctor-hero-contact.png" 
                alt="Hero Contact" 
                priority
                fill
                className=" object-contain"
                unoptimized
            />
          </div>

            <div className="w-full md:w-1/2">
                <h2 className="text-mo-brown-base text-xl md:text-2xl text-center md:text-left font-bold mb-4">Reserva tu evaluación gratuita </h2>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}
