import { Benefits } from "./components/Benefits";
import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";

export default function Verruga() {
  return (
    <div>
      <div className="bg-in-pink mb-12">
        <Header />
        <HeroContact />
        <InfoEnzimas />
      </div>
      <Benefits />
    </div>
  );
}