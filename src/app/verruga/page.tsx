import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";
export default function Verruga() {
  return (
    <div>
      <div className="bg-in-pink pb-12">
        <Header />
        <HeroContact />
        <InfoEnzimas />
      </div>
    </div>
  );
}