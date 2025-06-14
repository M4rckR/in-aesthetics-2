'use client'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';


export const Comparator = () => {
  const [position, setPosition] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    stiffness: 50,  // Mantener suave
    damping: 20     // Reducido de 50 a 25 para que termine más rápido
  });
  const animatedPosition = useTransform(springValue, (value) => value);

  useEffect(() => {
    // Secuencia de animación: primero al final, luego al centro
    const timer1 = setTimeout(() => {
      motionValue.set(100); // Ir al final
    }, 500);

    const timer2 = setTimeout(() => {
      motionValue.set(50); // Regresar al centro
    }, 2500); // Después de 2.5 segundos

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [motionValue]);

  useEffect(() => {
    const unsubscribe = animatedPosition.onChange((value) => {
      setPosition(value);
    });

    return unsubscribe;
  }, [animatedPosition]);

  return (
    <div className='max-w-[500px] mx-auto'>
      <div>
        <ReactCompareSlider 
          className='rounded-4xl'
          position={position}
          onPositionChange={setPosition}
            itemOne={<ReactCompareSliderImage src='/images/antes.png' alt='before' />}
            itemTwo={<ReactCompareSliderImage src='/images/despues.png' alt='after' />}
        />  
      </div>
        <p className='text-center text-mo-brown-base/50 text-sm py-1'>Arrastra para ver resultados</p>
    </div>
  )  
}   
