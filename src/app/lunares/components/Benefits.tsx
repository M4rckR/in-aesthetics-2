'use client';

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const Benefits = () => {
  return (
    <section className="h-[400px] md:h-screen relative my-16 px-4">
      <div className="container mx-auto max-w-[1200px] h-full relative ">
        {/* Círculo central con título */}
        <div className="h-full">  
          <div className="absolute md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2">
            <div className="bg-in-pink py-44 md:w-[200px] w-[150px] rounded-full relative">
              <h2 className="text-in-title-base absolute top-16 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 text-center text-4xl md:text-5xl font-in-playfair font-medium">
                Beneficios y <br /> Características
              </h2>
            </div>
            
          </div>
        <div className="absolute top-4/12 left-1/2 -translate-x-1/2 md:-translate-y-4/12 w-full max-w-[1200px] mx-auto px-1 md:hidden">
          <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="my-8"
        >
          <SwiperSlide className="!w-[250px]">
            <div className="flex flex-col items-center h-full">
              <div className="w-[220px] h-[220px] overflow-hidden rounded-lg">
                <Image 
                  src="/images/lunares/sin-cicatrices.png" 
                  alt="Sin cicatrices ni dolor" 
                  width={220} 
                  height={220} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <p className="text-center w-full text-[#C5641A] font-medium mt-3">Sin cicatrices ni dolor</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[250px]">
            <div className="flex flex-col items-center h-full">
              <div className="w-[220px] h-[220px] overflow-hidden rounded-lg">
                <Image 
                  src="/images/lunares/eliminacion-definitiva.png" 
                  alt="Eliminación definitiva" 
                  width={220} 
                  height={220} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <p className="text-center w-full text-[#C5641A] font-medium mt-3">Eliminación definitiva</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[250px]">
            <div className="flex flex-col items-center h-full">
              <div className="w-[220px] h-[220px] overflow-hidden rounded-lg">
                <Image 
                  src="/images/lunares/procedimiento-preciso.png" 
                  alt="Procedimiento seguro y preciso" 
                  width={220} 
                  height={220} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <p className="text-center w-full text-[#C5641A] font-medium mt-3">Procedimiento seguro y preciso</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[250px]">
            <div className="flex flex-col items-center h-full">
              <div className="w-[220px] h-[220px] overflow-hidden rounded-lg">
                <Image 
                  src="/images/lunares/resultados-inmediatos.png" 
                  alt="Resultados inmediatos" 
                  width={220} 
                  height={220} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <p className="text-center w-full text-[#C5641A] font-medium mt-3">Resultados inmediatos</p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>        

        </div>



        <section className="hidden md:flex md:flex-row">
          {/* Beneficio Superior Izquierdo */}
          <div data-aos="fade-up-right" data-aos-delay="100" className="md:absolute top-0 left-6 lg:left-12 lg:top-6 flex flex-col items-center w-3/12">
            <Image
              src="/images/lunares/sin-cicatrices.png"  
              alt="Beneficios y Características"
              width={300}
              height={300}
              className="object-cover w-56 lg:w-full hover:scale-105 transition-all duration-300"
            />
            <p className="text-center w-full text-in-brown font-medium mt-1">
              Sin cicatrices ni dolor
            </p>
          </div>

          {/* Beneficio Superior Derecho */}
          <div data-aos="fade-up-left" data-aos-delay="100" className="md:absolute top-0 right-4 lg:right-12 flex flex-col items-center md:w-4/12 lg:w-96">
            <Image
              src="/images/lunares/eliminacion-definitiva.png" 
              alt="Beneficios y Características"
              width={300}
              height={300}
              className="object-cover w-56 md:w-full hover:scale-105 transition-all duration-300"
            />
            <p className="text-center w-full text-in-brown font-medium mt-1">
              Eliminación definitiva
            </p>
          </div>

          {/* Beneficio Inferior */}
          <div data-aos="fade-up-right" data-aos-delay="100"  className="md:absolute bottom-16 lg:bottom-8 left-1/12  lg:left-52 flex flex-col items-center w-80">
            <Image
              src="/images/lunares/procedimiento-preciso.png"
              alt="Beneficios y Características"
              width={300}
              height={300}
              className="object-cover w-56 md:w-full hover:scale-105 transition-all duration-300"
            />
            <p className="text-center w-full text-in-brown font-medium mt-1">
              Procedimiento seguro y preciso
            </p>
          </div>

          {/* Beneficio Inferior derecho*/}
          <div data-aos="fade-up-left" data-aos-delay="100" className="md:absolute right-0 bottom-8 md:right-28 flex flex-col items-center w-3/12">
            <Image
              src="/images/lunares/resultados-inmediatos.png"
              alt="Beneficios y Características"
              width={300}
              height={300}
              className="object-cover w-56 lg:w-full hover:scale-105 transition-all duration-300"
            />
            <p className="text-center w-full text-in-brown font-medium mt-1">
              Resultados inmediatos
            </p>
          </div>
        </section>  


      </div>
    </section>
  );
}
