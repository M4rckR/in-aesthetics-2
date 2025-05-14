'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function AOSInit() {
  useEffect(() => {
    // Inicializar AOS normalmente
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });

    // Solo quitar aria-hidden del body
    const removeAriaHidden = () => {
      if (document.body.hasAttribute('aria-hidden')) {
        document.body.removeAttribute('aria-hidden');
      }
    };

    // Ejecutar inmediatamente
    removeAriaHidden();
    
    // Forzar una actualización de AOS después de un momento
    setTimeout(() => {
      removeAriaHidden();
      AOS.refresh();
    }, 100);
    
    // Observer para quitar aria-hidden cuando se añada
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'aria-hidden') {
          removeAriaHidden();
        }
      }
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['aria-hidden']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}