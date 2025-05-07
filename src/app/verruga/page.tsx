import { Benefits } from "./components/Benefits";
import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Reviews } from "./components/Reviews";
import { Questions } from "./components/Questions";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
export default function Verruga() {
  return (
    <div>
      <div className="bg-in-pink">
        <Header />
        <HeroContact />
        <InfoEnzimas />
      </div>
      <Benefits />
      <Testimonials />
      <Reviews />
      <Questions />
      <CtaWhatsApp />
    </div>
  );
}