'use client'
import Image from 'next/image'
import React from 'react'
import { Socialbar } from './Socialbar'
import { usePathname } from 'next/navigation'


export const Footer = () => {

 const pathname = usePathname()

  return (
    <footer 
        className={`${pathname === '/reduccion' ? 'md:pt-40' : ''} py-14  mt-auto bg-in-pink rounded-tl-[48px] rounded-tr-[48px] md:rounded-tl-[58px] md:rounded-tr-[58px]`}
        >
        <div className='container max-w-[1200px] mx-auto px-4 space-y-8'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='space-y-4 flex flex-col items-center md:items-start'> 
                    <Image
                    src ="/logos/logo_small.png"
                    alt ="logo inaesthetics"
                    width={48}
                    height={48}
                    /> 
                    <h3 
                        className='text-center md:text-left font-in-playfair text-2xl md:text-3xl lg:text-4xl md:max-w-[440px] text-in-title-base'
                    >Recupera la belleza de tu piel con un procedimiento rápido y seguro.</h3>
                </div>
                <div className='space-y-2 md:pt-16 text-center md:text-left text-in-brown'>
                    <p>Av. Sánchez Carrión 615- Oficina 1002, Jesús María Lima, Perú</p>
                    <p>974 309 260</p>
                    <div className='flex justify-center md:justify-start'>
                        <Socialbar gap={24} size={28}/>
                    </div>
                </div>
            </div>
            <div className='md:flex text-center gap-10 text-sm text-in-brown'>
                <p>Copyright © Inaesthetics 2025</p>
                <p>Created by Insalud</p>
            </div>
        </div>
    </footer>
  )
}