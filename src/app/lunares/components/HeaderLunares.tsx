import Image from "next/image"
import { Socialbar } from "../../../components/Socialbar"

export const HeaderLunares = () => {
  return (
    <div>
        <header className="max-w-[1200px] mx-auto container py-2 px-4">
            <div className="flex items-center justify-between">
                <Image 
                    priority 
                    src="/logos/marca.png" 
                    alt="logo inaesthetics" 
                    width={274}
                    height={79}
                    className="w-36 md:w-56"
                    // placeholder="blur"
                />
                <Socialbar 
                  size={22} 
                  gap={24}
                />
            </div>
        </header>
    </div>
  )
}
