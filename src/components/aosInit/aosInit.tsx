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

    // Fix para el problema de aria-hidden en el body
    const removeAriaHidden = () => {
      if (document.body.hasAttribute('aria-hidden')) {
        document.body.removeAttribute('aria-hidden');
      }
    };

    // Ejecutar inmediatamente y también después de cualquier actualización de AOS
    removeAriaHidden();
    document.addEventListener('aos:in', removeAriaHidden);
    document.addEventListener('aos:out', removeAriaHidden);

    return () => {
      document.removeEventListener('aos:in', removeAriaHidden);
      document.removeEventListener('aos:out', removeAriaHidden);
    };
  }, []);

  return null;
}