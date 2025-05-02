"use client"

import { Accordion } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Questions = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleValueChange = (value: string) => {
    setOpenItem(value);
    console.log("Pregunta abierta:", value);
  };

  return (
    <section className="container mx-auto max-w-[1200px] px-4 my-16 lg:my-32">
        <h3 className="text-center text-in-title-base font-in-playfair text-4xl md:text-5xl mb-10">Preguntas Frecuentes</h3>
        <Accordion.Root
            type="single"
            collapsible
            onValueChange={handleValueChange}
            value={openItem}
            className="accordion-root"
        >  
        <div className="md:flex space-y-4 md:space-y-0 gap-4">
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-1">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown text-lg">¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-1" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            Sí, nuestro tratamiento con Láser CO2 es mínimamente invasivo y aprobado por dermatólogos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-2">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown">¿Cuánto dura la recuperación?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-2" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            En pocos días tu piel estará completamente regenerada.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </div>
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-4">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown">¿Puedo eliminar varias imperfecciones en una sola sesión?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-4" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            Sí, podemos tratar varias áreas en la misma cita.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>

            </div>
        </div>
        </Accordion.Root>
        
        
    </section>
  ) 
}