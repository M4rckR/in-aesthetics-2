import Image from "next/image";
import { ContactForm } from "../ContactForm";

export const Ofert1 = () => {
  return (
    <article className="w-full min-h-[400px] md:min-h-[500px] flex items-center py-8">
      <div className="max-w-[1200px] container mx-auto px-4 w-full">
        <div className="lg:grid grid-cols-12 gap-4 items-center">
          {/* Texto */}
          <div className="col-span-5 flex items-center mb-8 lg:mb-0">
            <h2 className="font-in-playfair text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-in-title-base pb-4 md:pb-8 ">
              Despídete de{" "}
              <span className="text-in-brown font-semibold">
                lunares, verrugas y acrocordones{" "}
              </span>
              de forma segura y sin cicatrices
            </h2>
            <Image
              priority
              alt="chica sin lunares"
              src="/images/hero_ofert_1.png"
              width={530}
              height={400}
              // className="absolute  -right-16 -z-10 w-64 sm:-bottom-4 md:-bottom-0 sm:-right-11 sm:w-[260px]  md:-right-0 md:w-[360px] lg:w-[500px] bottom-0"
              className="block lg:hidden z-20 xl:left-1/2 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[450px] xl:-translate-x-1/2 bottom-0"
            />
          </div>

          {/* Formulario */}
          <div className="col-start-9 col-span-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </article>
  );
};
