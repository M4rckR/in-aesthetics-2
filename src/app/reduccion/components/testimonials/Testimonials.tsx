import { TestimonialCarousel } from "./TestimonialCarousel"

export const Testimonials = () => {
  return (
    <div className="relative bg-in-pink pt-72 md:pt-80 rounded-t-[57px] -mt-[192px] z-10 pb-16 md:pb-32 md:px-48">
      <section className="container mx-auto max-w-7xl px-4 space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-mo-brown-base">Testimonios que nos respaldan</h2>
        <TestimonialCarousel />
      </section>
    </div>
  )
}
