import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact/HeroContact";
import { Reviews } from "./components/Reviews";
import { TreatmentDetails } from "./components/TreatmentDetails";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Questions } from "./components/Questions";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Benefits } from "./components/benefits/Benefits";
import { Metadata } from "next";
import { ButtonWsp } from "@/components/ButtonWsp";

export const metadata: Metadata = {
  title: 'Inaesthetics | Hydrafacial - Limpieza facial profunda y rejuvenecimiento',
  description: 'Tratamiento Hydrafacial no invasivo que limpia, exfolia, extrae impurezas e hidrata tu piel en un solo procedimiento. Ideal para todo tipo de pieles, combate opacidad, acné y signos de envejecimiento.',
  keywords: ['hydrafacial', 'limpieza facial', 'tratamiento facial', 'exfoliación', 'hidratación piel', 'acné', 'poros dilatados', 'rejuvenecimiento facial', 'tratamiento no invasivo', 'Inaesthetics Lima'],

  // Canonical y robots
  alternates: {
    canonical: 'https://inaesthetics.pe/hydrafacial',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Inaesthetics | Hydrafacial - Limpieza y rejuvenecimiento facial',
    description: 'Tratamiento no invasivo que limpia, exfolia, extrae impurezas e hidrata tu piel en un solo procedimiento de 30 minutos. Ideal para todo tipo de pieles.',
    url: 'https://inaesthetics.pe/hydrafacial',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/treatment-co2.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento Hydrafacial en Inaesthetics - Limpieza facial profunda',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inaesthetics | Hydrafacial - Rejuvenecimiento facial',
    description: 'Limpia, exfolia e hidrata tu piel en un solo procedimiento de 30 minutos. Diseñado para todo tipo de pieles.',
    site: '@InaestheticsPE',
    images: ['/images/treatment-co2.png'],
  },
};

export default function Hydrafacial() {
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
      <ButtonWsp id="wsp-hydrafacial" message="Hola 👋 Vi su página sobre el tratamiento hydrafacial para limpieza profunda y estoy interesado. ¿Me pueden dar más información?"/>
    </div>
  );
}
