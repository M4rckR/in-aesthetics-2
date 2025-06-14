import { Comparator } from "./Comparator";
import { SimpleForm } from "./SimpleForm";

export const Hero = () => {
  return (

    <>
      <div className="bg-linear-to-b from-[#FFECE3]/0 to-[#FFECE3]">
        <section className="max-w-7xl mx-auto px-4 container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 py-4 md:pt-8 md:pb-16">
            <div className="space-y-0 md:space-y-4 mb-2 md:mb-0 lg:space-y-8">
              <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl
              xl:text-5xl font-in-playfair text-in-title-base">Despídete de
                <span className="text-in-brown font-semibold">{' '}
                  lunares, verrugas y acrocordones {' '}
                </span>
                <span className="hidden lg:block">
                  {' '}de forma segura y sin cicatrices
                </span>
              </h1>
              <div className="hidden md:block">
                <SimpleForm />
              </div>
            </div>

            <div>
              <Comparator />
              
            </div>
          </div>


        </section>
      </div>
      <div className="md:hidden px-4 py-8">
        <SimpleForm />
      </div>
    </>
  )
}
