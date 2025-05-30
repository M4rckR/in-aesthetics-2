import Image from "next/image"
import { HeroForm } from "./HeroForm"

export const HeroContact = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="0" className="container mx-auto max-w-7xl px-4 mb-16">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
            <div className="relative md:w-1/2">
                <Image 
                  className="absolute lg:-translate-x-3/12 top-0 w-full h-full mx-auto md:mx-0" 
                  src="/images/lunares/sprites.png" 
                  alt="capsule-pink" 
                  width={100} 
                  height={100} 
                  unoptimized
                />
                <Image className="w-[230px] h-96 md:h-full mx-auto md:mx-0" 
                src="/svg/capsule-pink.svg" 
                alt="capsule-pink" 
                width={100} 
                height={100} 
                unoptimized
                />
                <h2 className="text-3xl sm:px-8 md:px-0 md:pl-12 absolute top-1/2 -translate-y-1/2 font-in-playfair text-mo-brown-base sm:text-4xl md:text-4xl pl-0 max-w-[680px] md:text-left text-center left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-full"><span className="block text-4xl md:text-4xl md:inline">Hydrafacial:</span> La piel que mereces en solo 30 minutos</h2>    
                {/* <h2 className="block md:hidden text-3xl sm:px-8 md:px-0 md:pl-12 absolute top-1/2 -translate-y-1/2 font-in-playfair text-mo-brown-base sm:text-4xl md:text-4xl pl-0 max-w-[680px] md:text-left text-center">Hydrafacial: <br /> La piel que mereces en solo 30 minutos</h2>     */}
            </div>
            <div className="md:w-1/2">
                <HeroForm />
            </div>
        </div>
    </section>
  )
}
