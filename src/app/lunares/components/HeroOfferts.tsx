'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Autoplay, Navigation } from 'swiper/modules';
import { Ofert1 } from './oferts/Ofert1';
import { Ofert2 } from './oferts/Ofert2';
import { Ofert3 } from './oferts/Ofert3';



export const HeroOfferts = () => {
  return (
    <section className="relative w-full md:bg-linear-to-b md:from-[#FFECE3]/0 md:to-[#FFECE3]">
      {/* Botones de navegación */}
      <div className="hidden hero-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-in-pink/80 hover:bg-in-pink hover:shadow-md transition-all w-10 h-10 rounded-full lg:flex items-center justify-center">
        <FaChevronLeft className="text-in-brown w-5 h-5" />
      </div>
      <div className="hidden hero-next absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-in-pink/80 hover:bg-in-pink hover:shadow-md transition-all w-10 h-10 rounded-full lg:flex items-center justify-center">
        <FaChevronRight className="text-in-brown w-5 h-5" />
      </div>
      
      <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true} 
          autoHeight={true}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          autoplay={{
            delay: 350000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          allowTouchMove={true}  
          speed={2000}  
          className="w-full"
          >
          {[Ofert1, Ofert2, Ofert3].map((Comp, i) => (
          <SwiperSlide key={i} className="w-full">
            <div className="">
              <Comp />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
