'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function AOSInit() {
  useEffect(() => {
    // Inicializar AOS con las opciones deseadas
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });

    // Función para limpiar todos los atributos AOS del body
    const cleanBodyAttributes = () => {
      // Eliminar aria-hidden
      if (document.body.hasAttribute('aria-hidden')) {
        document.body.removeAttribute('aria-hidden');
      }
      
      // Eliminar todos los atributos data-aos-* del body
      const bodyAttributes = [...document.body.attributes];
      bodyAttributes.forEach(attr => {
        if (attr.name.startsWith('data-aos')) {
          document.body.removeAttribute(attr.name);
        }
      });
    };

    // Ejecutar limpieza inmediatamente
    cleanBodyAttributes();
    
    // Configurar un MutationObserver para monitorear cambios en el body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            (mutation.attributeName?.startsWith('data-aos') || 
             mutation.attributeName === 'aria-hidden')) {
          cleanBodyAttributes();
        }
      });
    });
    
    // Iniciar la observación del body
    observer.observe(document.body, { 
      attributes: true,
      attributeFilter: ['aria-hidden', 'data-aos', 'data-aos-easing', 
                        'data-aos-duration', 'data-aos-delay']
    });

    // Limpiar observer al desmontar
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}