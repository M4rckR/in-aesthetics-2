import Image from "next/image"
import { ContactForm } from "./ContactForm"

export const HeroContact = () => {



  return (
    <section className="container mx-auto max-w-7xl px-4 pt-4 mb-16 md:mb-32 lg:px-36">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-mo-brown-base mb-12">
        Moldea tu cuerpo sin cirugía con nuestro tratamiento de enzimas  Pb Serum
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
            <Image 
                src="/images/reduccion/doctor-hero-contact.png" 
                alt="Hero Contact" 
                width={300} 
                height={300} 
                className="w-1/2 object-contain"
            />
            <div className="w-full md:w-1/2">
                <h3 className="text-mo-brown-base text-xl text-center md:text-left font-bold mb-4">Reserva tu evaluación gratuita</h3>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}
