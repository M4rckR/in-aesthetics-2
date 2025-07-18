import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const Questions = () => {
  return (
    <section id="preguntas-frecuentes" className="container mx-auto max-w-7xl px-4 pt-4 mb-16 md:mb-32">
      <div className="flex flex-col md:flex-row">
        <div data-aos="fade-up-right" data-aos-delay="0" className="mb-6 md:w-8/12">
          <h2 className="text-3xl font-in-playfair md:text-4xl lg:text-5xl text-center md:text-left text-in-title-base mb-12">
            Preguntas Frecuentes
          </h2>
          <div>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  <h3 className="text-in-brown text-base md:text-lg font-semibold">
                  ¿Es seguro para todo tipo de piel?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-mo-brown-base">
                  Sí, Hydrafacial es un tratamiento no invasivo y apto para todo tipo de
piel, incluso las más sensibles. Sus principios activos y tecnología de
succión controlada no generan irritación ni enrojecimiento severo.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  <h3 className="text-in-brown text-base md:text-lg font-semibold">
                  ¿Cuánto dura el procedimiento?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-mo-brown-base">
                  La sesión de Hydrafacial dura entre 30 a 45 minutos, dependiendo del
protocolo elegido. Es ideal para realizarlo incluso en horarios
laborales, ya que no necesita tiempo de recuperación.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  <h3 className="text-in-brown text-base md:text-lg font-semibold hover:no-underline">
                  ¿Cada cuánto debo hacerlo?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-mo-brown-base">
                  Se recomienda realizarlo una vez al mes para mantener una piel
saludable, luminosa y bien hidratada. En pieles con necesidades
específicas, tu médico podrá indicarte una frecuencia personalizada.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Image
          data-aos="fade-up-left" 
          data-aos-delay="0"
          src="/images/moldea/doctor-questions-section.png"
          alt="Moldea Questions"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover max-w-[320px] mx-auto md:w-4/12"
        />
      </div>
    </section>
  );
};
