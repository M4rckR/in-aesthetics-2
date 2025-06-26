import { HeroSection } from "./components/HeroSection";
import { NavInluxury } from "./components/NavInluxury";

export default function InLuxuryPage() {
  return (
    <>
      <div className="degradado-inluxuri-hero lg:min-h-screen relative">
        <NavInluxury />
        <HeroSection />
      </div>
    </>
  );
}
