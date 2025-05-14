'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

// No inicializamos Modal aquí, lo haremos dentro de un useEffect

interface PromoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  imageUrl?: string;
  actionUrl?: string;
  showAfter?: number; // En milisegundos
  showOnce?: boolean; // Si es true, solo se muestra una vez por usuario
  storageKey?: string; // Clave única para localStorage
  width?: string | number;
  height?: string | number;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  content: {
    position: 'relative' as const,
    top: 'auto' as const,
    left: 'auto' as const,
    right: 'auto' as const,
    bottom: 'auto' as const,
    maxWidth: '90%',
    maxHeight: '90vh',
    margin: 0,
    padding: 0,
    border: 'none',
    borderRadius: '22px',
    overflow: 'auto',
    background: 'transparent',
    boxSizing: 'border-box' as const,
  },
};

export function PromoModal({
  isOpen: externalIsOpen,
  title,
  imageUrl,
  actionUrl,
  showAfter = 0,
  showOnce = true,
  storageKey = 'promo-modal-shown',
  width = 'auto',
  height = 'auto',
}: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Inicializar Modal solo una vez en el cliente
  useEffect(() => {
    // Establecer el elemento raíz para accesibilidad
    Modal.setAppElement(document.body);
  }, []);

  useEffect(() => {
    // Si isOpen es controlado externamente
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
      return;
    }

    // Comprobar si ya se ha mostrado antes
    if (showOnce) {
      const hasBeenShown = localStorage.getItem(storageKey);
      if (hasBeenShown) return;
    }

    // Mostrar después de un tiempo
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Marcar como mostrado si showOnce es true
      if (showOnce) {
        localStorage.setItem(storageKey, 'true');
      }
    }, showAfter);

    return () => clearTimeout(timer);
  }, [externalIsOpen, showAfter, showOnce, storageKey]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAction = () => {
    if (actionUrl) {
      window.open(actionUrl, '_blank');
      handleClose();
    }
  };

  // Aplicar estilos dinámicos
  const dynamicStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      width,
      height,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={dynamicStyles}
      contentLabel={title || 'Promotional Modal'}
      closeTimeoutMS={0}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="flex flex-col max-w-full overflow-hidden">
        {/* Botón de cierre (X) */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-200 cursor-pointer"
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        {/* Imagen */}
        {imageUrl && (
          <div 
            className="relative w-full overflow-hidden cursor-pointer" 
            onClick={handleAction}
          >
            <Image
              src={imageUrl}
              alt={title || 'Promotional image'}
              width={500}
              height={300}
              style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}




