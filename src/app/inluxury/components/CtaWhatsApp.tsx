import Image from "next/image"

interface CtaWhatsAppProps {
  message: string;
  phoneNumber: string;
  buttonText?: string;
}

export const CtaWhatsApp = ({ message, phoneNumber, buttonText = "¡Agendar una cita!" }: CtaWhatsAppProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
        <div className="container mx-auto max-w-6xl px-4 md:pt-0">
            <section data-aos="zoom-in" data-aos-delay="0" className="bg-mo-brown-base py-6 px-6 md:py-8  md:grid md:grid-cols-12 lg:py-12 lg:px-16 rounded-[34px] relative">
                    <div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 md:left-32">
                        <Image 
                        src="/images/moldea/chica-sonrisa.png" 
                        alt="WhatsApp" 
                        width={200} 
                        height={200} 
                        unoptimized
                        />
                    </div>
                <div className="md:col-start-3 md:col-span-full">
                    <div className="flex flex-col lg:flex-row items-center md:items-end lg:items-center justify-end lg:gap-16 space-y-4 lg:space-y-0">
                        <p className="text-xl md:text-2xl lg:text-3xl text-center md:text-left md:pl-16 text-white font-light lg:w-2/3 lg:pl-4">Donde la verdadera belleza se vive con lujo y sofisticación.</p>
                        <a className="cta-custom-wsp flex items-center justify-center gap-4 bg-in-pink py-2 px-4 lg:p-3 rounded-4xl lg:w-1/3" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Image 
                            src="/icons/button_wsp_style_2.svg" 
                            alt="WhatsApp" 
                            width={34}
                            height={34} 
                            />
                            <p className="font-bold text-mo-brown-base ">{buttonText}</p>
                        </a>
                    </div>
                </div>
                
            </section>

        </div>
  )
}
