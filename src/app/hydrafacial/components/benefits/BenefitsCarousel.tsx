"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Importaciones de estilos de Swiper
import "swiper/css"

export const BenefitsCarousel = () => {
  const benefits = [
    {
      id: 1,
      title: "Limpieza profunda",
      description: "Elimina impurezas y exceso de grasa.",
      image: "/images/benefits/beneficio-1.png"
    },
    {
      id: 2,
      title: "Hidratación intensiva",
      description: "Restaura la humedad natural de la piel.",
      image: "/images/benefits/beneficio-1.png"
    },
    {
      id: 3,
      title: "Rejuvenecimiento",
      description: "Estimula la producción de colágeno.",
      image: "/images/benefits/beneficio-1.png"
    },
    {
      id: 4,
      title: "Rejuvenecimiento",
      description: "Estimula la producción de colágeno.",
      image: "/images/benefits/beneficio-1.png"
    }
  ]

  return (
    <div className="benefits-carousel-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={2000}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        className="mySwiper"
      >
        {benefits.map((benefit) => (
          <SwiperSlide key={benefit.id}>
            <div className="flex flex-col">
              <div>
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />  
              </div>
              <h3 className="text-in-brown font-medium text-lg text-center md:text-left pt-2 md:pt-0">{benefit.title}</h3>
              <p className="text-sm text-center md:text-left">{benefit.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
