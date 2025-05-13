"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/Testimonials.data";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const TestimonialCarousel = () => {
  return (
    <Swiper 
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        className="testimonial-swiper-moldea"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={2000}
        pagination={{
            clickable: true,
            type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          } 
        }}
    >
      {TestimonialsData.map((item) => (
        <SwiperSlide
          key={item.id}
          className="text-in-blue-base border border-[#FFECE3] shadow h-[300px] sm:h-[320px] md:h-[300px]"
        >
          <div className="flex flex-col h-full p-6 md:p-8">
            <div className="flex items-center gap-4 pb-4 border-b border-[#FFECE3] rounded-3xl">
              <Avatar className="w-14 h-14 md:w-16 md:h-16">
                <AvatarFallback>
                  <p>{item.fallback}</p>
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold m-0">{item.name}</p>
                <p className="text-sm text-gray-500">Usuario Verificado</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-4 flex-grow overflow-auto">
              <Image
                className="pt-1 flex-shrink-0"
                src="/svg/quotes.svg"
                alt="quote"
                width={28}
                height={28}
              />
              <p className="font-medium line-clamp-6 md:line-clamp-none">{item.testimonial}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
