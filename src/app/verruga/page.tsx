import { Benefits } from "./components/Benefits";
import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Reviews } from "./components/Reviews";
import { Questions } from "./components/Questions";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
import { PromoBanner } from "./components/PromoBanner";

export default function Verruga() {
  return (
    <div>
      <Header />
      <PromoBanner /> 
      <HeroContact />
      <InfoEnzimas />
      <Benefits />
      <Testimonials />
      <Reviews />
      <Questions />
      <CtaWhatsApp />
    </div>
  );
}