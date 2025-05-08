import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact/HeroContact";
import { Reviews } from "./components/Reviews";
import { TreatmentDetails } from "./components/TreatmentDetails";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Questions } from "./components/Questions";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Benefits } from "./components/benefits/Benefits";
import { ButtonWsp } from "./components/ButtonWsp";
export default function Moldeador() {
  return (
    <div>
      <Header />
      <HeroContact />
      <Benefits />
      <TreatmentDetails />
      <Testimonials />
      <Reviews />
      <Questions />
      <CtaTreatmentWsp />
      <ButtonWsp />
    </div>
  );
}