"use client"


import { socials } from "@/data/socials"
import Image from "next/image"

type SocialbarProps = {
    size:number
    gap:number
}

export const Socialbar = ({size,gap}:SocialbarProps) => {
  return (
    <div 
        style={{display: "flex", gap: `${gap}px`}}
    >
        {socials.map((red) => (
            <a key={red.alt} href={red.href} target="_blank" rel="noopener noreferrer">
                <Image
                    priority    
                    src={red.src}
                    alt={red.alt}
                    width={25}
                    height={25}
                    style={{width: `${size}px`, height: `${size}px`}}
                    />
                </a>
        ))}
    </div>
  )
}