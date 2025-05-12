import { Benefits } from "./components/Benefits";
import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Reviews } from "./components/Reviews";
import { Questions } from "./components/Questions";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
import { PromoBanner } from "./components/PromoBanner";
import { ButtonWsp } from "./components/ButtonWsp"; 
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Inaesthetics | Reducción de celulitis y grasa localizada',
  description: 'Moldea tu cuerpo sin cirugía con nuestro tratamiento de enzimas Pb Serum. Elimina grasa localizada de forma rápida y efectiva en abdomen, brazos, piernas y papada.',
  keywords: ['reducción de celulitis', 'enzimas Pb Serum', 'grasa localizada', 'tratamiento no invasivo', 'moldear cuerpo', 'Inaesthetics', 'lipolítico', 'sin cirugía', 'reducción de papada', 'tratamiento corporal Lima'],

  // Canonical y robots
  alternates: {
    canonical: 'https://inaesthetics.pe/enzimas',
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
    title: 'Inaesthetics | Moldea tu cuerpo sin cirugía con enzimas Pb Serum',
    description: 'Moldea tu cuerpo sin cirugía con nuestro tratamiento de enzimas Pb Serum. Elimina grasa localizada de forma rápida y efectiva en abdomen, brazos, piernas y papada.',
    url: 'https://inaesthetics.pe/enzimas',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/reduccion/encimas-pb-serum-2.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento de reducción de celulitis con enzimas Pb Serum en Inaesthetics',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inaesthetics | Moldea tu cuerpo sin cirugía',
    description: 'Elimina grasa localizada de forma rápida y efectiva con enzimas Pb Serum. Resultados visibles desde la primera sesión.',
    site: '@InaestheticsPE',
    images: ['/images/reduccion/encimas-pb-serum-2.png'],
  },

  // Favicon y color
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

};


export default function Enzimas() {
  return (
    <div>
      <Header />
      <PromoBanner /> 
      <HeroContact />
      <InfoEnzimas />
      <Benefits />
      <Testimonials />
      <Reviews />
      <Questions />
      <CtaWhatsApp />
      <ButtonWsp />
    </div>
  );
}