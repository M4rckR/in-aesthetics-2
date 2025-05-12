import { HeroOfferts } from "./components/HeroOfferts";
import { HeroLaserTreatment } from "./components/HeroLaserTreatment";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Questions } from "./components/Questions";
import { ButtonWsp } from "./components/ButtonWsp";
import { HeaderLunares } from "./components/HeaderLunares";
import { ContactForm } from "./components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Inaesthetics | Eliminación de lunares, verrugas y acrocordones con láser CO2',
  description: 'Eliminación de lunares, verrugas y acrocordones con láser CO2 DEKA sin dolor ni marcas. Procedimiento rápido, seguro y eficaz realizado por especialistas en estética avanzada.',
  keywords: ['eliminación lunares', 'eliminación verrugas', 'acrocordones', 'láser CO2', 'DEKA', 'tratamiento sin cicatrices', 'eliminación definitiva', 'procedimiento seguro', 'resultados inmediatos', 'Inaesthetics Lima', 'dermatología estética'],

  // Canonical y robots
  alternates: {
    canonical: 'https://inaesthetics.pe/lunares',
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
    title: 'Inaesthetics | Eliminación de lunares y verrugas con láser CO2 DEKA',
    description: 'Elimina lunares, verrugas y acrocordones sin dolor ni marcas con nuestro tratamiento láser CO2 DEKA. Sin cicatrices, procedimiento seguro y con resultados inmediatos.',
    url: 'https://inaesthetics.pe/lunares',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/hero_image.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento con láser CO2 DEKA para eliminación de lunares y verrugas en Inaesthetics',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inaesthetics | Eliminación de lunares y verrugas sin cicatrices',
    description: 'Tecnología láser CO2 DEKA para eliminar lunares, verrugas y acrocordones sin dolor ni marcas. Resultados inmediatos y definitivos.',
    site: '@InaestheticsPE',
    images: ['/images/hero_image.png'],
  },
};


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