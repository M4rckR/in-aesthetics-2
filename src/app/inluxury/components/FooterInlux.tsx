import { cdn } from "@/utils/cdn"
import Image from "next/image"
import Link from "next/link"

export const FooterInlux = () => {
  return (
    <footer id="footer-inlux" className="container max-w-7xl mx-auto px-4">
        <Image
            src={cdn("/shared/logos/inluxuri-experience.png")}
            alt="InLuxury experience"
            width={140}
            height={140}
            className="mb-6 mx-auto lg:mx-0"
        />
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-mo-brown-base pb-16">
            <p className=" text-2xl lg:col-span-4 text-center lg:text-left">Recupera la belleza de tu piel con un procedimiento rápido y seguro.</p>
            <div className="flex flex-col items-center lg:items-start gap-2 lg:col-span-3">
                <Link href="#form-inlux">Contacta con nosotros</Link>
                <Link href="https://app.inaesthetics.pe/pdf/tratamiento-de-datos-personales.pdf" target="_blank" rel="noopener noreferrer">Términos y condiciones</Link>
                <Link href="https://app.inaesthetics.pe/pdf/tratamiento-de-datos-personales.pdf" target="_blank" rel="noopener noreferrer">Política de privacidad</Link>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4">
                <p className="text-center lg:text-left">Av.Faustino Sánchez Carrión Nro. 615 <span className="block lg:inline"> - Jesús María,Lima, Perú</span></p>
                <p>Info@inaesthetics.pe</p>
                <p>997 621 747</p>
            </div>

        </section>
        <section className="pb-4 flex justify-between text-mo-brown-base">
            <div className="flex gap-12">
                <p>© INLUXURY</p>
                    <Link className="hidden lg:block" href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" rel="noopener noreferrer">
                    <p>Términos y condiciones</p>
                </Link>
                <Link className="hidden lg:block" href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" rel="noopener noreferrer">
                    <p>Política de privacidad</p>
                </Link>
            </div>
            <div className="flex gap-4 lg:gap-12">
                <div className="gap-4 hidden lg:flex">
                    <Link href="https://www.facebook.com/profile.php?id=61567398632399" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={cdn("/shared/logos/facebook.svg")}
                            alt="Facebook"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/inluxury.experience/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={cdn("/shared/logos/instagram.svg")}
                            alt="Instagram"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="https://www.tiktok.com/@inluxury.experience?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={cdn("/shared/logos/tiktok.svg")}
                            alt="Tiktok"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
                <p>Created by Inaesthetics.</p>
            </div>
        </section>
    </footer>
  )
}
