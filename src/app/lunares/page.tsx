import { HeroOfferts } from "./components/HeroOfferts";
import { HeroLaserTreatment } from "./components/HeroLaserTreatment";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Questions } from "./components/Questions";
import { ButtonWsp } from "./components/ButtonWsp";
import { HeaderLunares } from "./components/HeaderLunares";
import { ContactForm } from "./components/ContactForm";


export default function LunaresPage() {
  return (
    <>
      <ContactForm />
      <HeaderLunares />
      <HeroOfferts />
      <HeroLaserTreatment />
      <Benefits />
      <Testimonials />
      <Questions />
      <CtaTreatmentWsp />
      <ButtonWsp />
    </>
  );
}