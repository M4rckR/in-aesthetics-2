"use client"


import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import { testimonials } from "@/data/testimonials"


export const Testimonials = () => {
  return (
    <div className="container mx-auto max-w-[1200px] px-4 my-16 lg:my-32">
        <h3 className="text-center text-in-title-base font-in-playfair text-4xl md:text-5xl mb-10" data-aos="fade-up">Testimonios</h3>
        <div data-aos="fade-up" data-aos-duration="800">
          <Swiper
              className="testimonial-swiper"
              effect="fade"
              modules={[EffectFade, Autoplay]}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              loop={true}
              speed={2000}
              allowTouchMove={false}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="flex justify-center">
                <div className="rounded-2xl px-6 flex flex-col gap-4 max-w-[640px] w-full mx-auto space-y-4">
                  <div>
                    <p className="text-sm md:text-xl font-medium text-in-brown">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-4 items-center mt-4">
                      <Image
                        width={10}
                        height={10}
                        src="/avatars/default_avatar.png"
                        alt="avatar user"
                        className="w-12 h-12 rounded-full bg-gray-200"
                      />
                      <div>
                        <div className="flex flex-col">
                          <p className="md:font-semibold">{testimonial.name}</p>
                          <div className="flex gap-1 text-in-cyan-text ">
                            <FaCheckCircle className="mt-1 w-3"/>
                            <p className="text-xs font-medium mt-1">Usuario Verificado</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div> 
                    <p className="text-sm md:text-xl font-medium text-in-brown">
                      {testimonial.text2}
                    </p>
                    <div className="flex gap-4 items-center mt-4">
                      <Image
                        width={10}
                        height={10}
                        src="/avatars/default_avatar.png"
                        alt="avatar user"
                        className="w-12 h-12 rounded-full bg-gray-200"
                      />
                      <div>
                        <div className="flex flex-col">
                          <p className="md:font-semibold">{testimonial.name2}</p>
                          <div className="flex gap-1 text-in-cyan-text ">
                            <FaCheckCircle className="mt-1 w-3"/>
                            <p className="text-xs font-medium mt-1">Usuario Verificado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}
