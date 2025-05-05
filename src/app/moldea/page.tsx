import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact/HeroContact";
import { TreatmentDetails } from "./components/TreatmentDetails";
import { Testimonials } from "./components/testimonials/Testimonials";
export default function Moldeador() {
  return (
    <div>
      <Header />
      <HeroContact />
      <TreatmentDetails />
      <Testimonials />
    </div>
  );
}