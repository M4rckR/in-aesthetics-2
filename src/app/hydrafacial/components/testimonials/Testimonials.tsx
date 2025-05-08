import { TestimonialCarousel } from "./TestimonialCarousel";


export const Testimonials = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 pt-4 mb-16 md:mb-32">
        <h2 className="text-3xl font-in-playfair md:text-4xl text-center text-in-title-base pb-8">Testimonios que nos respaldan</h2>

        <TestimonialCarousel />
    </section>
  )
}
