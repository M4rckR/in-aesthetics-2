import { HeroOfferts } from "./components/HeroOfferts";
import { HeroLaserTreatment } from "./components/HeroLaserTreatment";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Questions } from "./components/Questions";
import { AOSInit } from "@/components/aosInit/aosInit";

export default function LunaresPage() {
  return (
    <div>
      <AOSInit />
      <HeroOfferts />
      <HeroLaserTreatment />
      <Benefits />
      <Testimonials />
      <Questions />
      <CtaTreatmentWsp />
    </div>
  );
}