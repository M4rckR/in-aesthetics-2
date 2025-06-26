import { HeroSection } from "./components/HeroSection";
import { NavInluxury } from "./components/NavInluxury";
import { AboutServices } from "./components/AboutServices";
import { Benefits } from "./components/Benefits";
import { Pillars } from "./components/Pillars";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
import { FooterInlux } from "./components/FooterInlux";

export default function InLuxuryPage() {
  return (
    <>
      <div className="degradado-inluxuri-hero lg:min-h-screen relative mb-12 lg:mb-16 xl:mb-20">
        <NavInluxury />
        <HeroSection />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <AboutServices />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <Benefits />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <Pillars />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <CtaWhatsApp 
          message="Hola 👋 Vi su página de medicina estética InLuxury. Quiero más información sobre sus tratamientos."
          phoneNumber="+51997621747"
          buttonText="¡Agendar una cita!"
        />
      </div>

      <FooterInlux />
    </>
  );
}
