import Image from "next/image"
import { HeaderLunares } from "./HeaderLunares"
import { HeroOfferts } from "./HeroOfferts"

export const HeaderLunaresAndOfferts = () => {
  return (
    <div className="relative">
      <HeaderLunares />
      <HeroOfferts />
      <Image
            priority
            alt="chica sin lunares"
            src="/images/hero_ofert_1.png"
            width={530}
            height={400}
            // className="absolute  -right-16 -z-10 w-64 sm:-bottom-4 md:-bottom-0 sm:-right-11 sm:w-[260px]  md:-right-0 md:w-[360px] lg:w-[500px] bottom-0"
            className="hidden lg:block lg:absolute z-20 lg:left-1/2 lg:max-w-[400px] xl:max-w-[450px] lg:-translate-x-1/2 bottom-0"
        />
    </div>
  )
}
