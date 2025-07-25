"use client";
import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"
import { MouseEvent } from "react";

export const NavInluxury = () => {
  const handleAgendarClick = (e: MouseEvent) => {
    e.preventDefault();
    
    // Hacer scroll suave al formulario
    const formElement = document.getElementById('contact-form-hydrafacial');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Encontrar el botón del formulario y aplicar animación
      setTimeout(() => {
        const submitButton = formElement.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (submitButton) {
          // Agregar clase de animación
          submitButton.classList.add('animate-pulse', 'ring-4', 'ring-mo-brown-base', 'ring-opacity-50');
          
          // Quitar la animación después de 3 segundos
          setTimeout(() => {
            submitButton.classList.remove('animate-pulse', 'ring-4', 'ring-mo-brown-base', 'ring-opacity-50');
          }, 3000);
        }
      }, 500);
    }
  };

  return (
    <div data-aos="fade-up" data-aos-delay="0" id="form-inlux" className="relative z-10 mb-8 lg:mb-10 xl:mb-12">
        <nav className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center font-in-poppins">
                <section className="flex items-center gap-12 pt-8 text-inluxury-brown-base">
                    <div className="gap-8 hidden md:flex">
                        <Link href="#nosotros-inlux">Nosotros</Link>
                        <Link href="#servicios-inlux">Servicios</Link>
                    </div>
                        <Image 
                        src={cdn("/shared/logos/logo-inluxury.png")} 
                        alt="logo InLuxury"
                        width={240} 
                        height={149} 
                        className="w-48"
                        quality={95}
                        priority={true}
                        
                        />
                    <div className="gap-8 hidden md:flex">
                        <Link href="#footer-inlux">Contacto</Link>
                        <button 
                          onClick={handleAgendarClick}
                          className="hover:text-mo-brown-hover transition-colors cursor-pointer"
                        >
                          Agendar
                        </button>
                    </div>
                </section>


            </div>
        </nav>
    </div>
  )
}
