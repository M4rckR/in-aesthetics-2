import type { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { EMAIL_DESTINATIONS } from "@/data/emails";
import { NavInluxury } from "./components/NavInluxury";
import { AboutServices } from "./components/AboutServices";
import { Benefits } from "./components/Benefits";
import { Pillars } from "./components/Pillars";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
import { FooterInlux } from "./components/FooterInlux";
import { ButtonWsp } from "@/components/ButtonWsp";

export const metadata: Metadata = {
  title: "InLuxury - Medicina Estética Avanzada y Longevidad | Inaesthetics",
  description: "Experiencias exclusivas de medicina estética avanzada, nutrición funcional y longevidad. Tratamientos personalizados para una vida más larga y saludable en Lima, Perú.",
  keywords: "medicina estética avanzada, longevidad, nutrición funcional, epigenética, medicina hormonal, yoga consciente, tratamientos personalizados Lima",
  authors: [{ name: "Inaesthetics" }],
  creator: "Inaesthetics",
  publisher: "Inaesthetics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://inaesthetics.pe/inluxury',
    title: 'InLuxury - Medicina Estética Avanzada y Longevidad',
    description: 'Experiencias exclusivas de medicina estética avanzada, nutrición funcional y longevidad. El camino personalizado hacia una vida más larga y saludable.',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/banner-temporal.png',
        width: 1200,
        height: 630,
        alt: 'InLuxury - Medicina Estética Avanzada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InLuxury - Medicina Estética Avanzada y Longevidad',
    description: 'Experiencias exclusivas de medicina estética avanzada, nutrición funcional y longevidad.',
    images: ['/images/banner-temporal.png'],
  },
  alternates: {
    canonical: 'https://inaesthetics.pe/inluxury',
  },
  category: 'Salud y Belleza',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'InLuxury - Inaesthetics',
  description: 'Centro especializado en medicina estética avanzada, nutrición funcional y longevidad con tratamientos personalizados.',
  url: 'https://inaesthetics.pe/inluxury',
  logo: 'https://inaesthetics.pe/logos/logo_small.png',
  image: 'https://inaesthetics.pe/images/banner-temporal.png',
  telephone: '+51997621747',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PE',
    addressLocality: 'Lima',
    addressRegion: 'Lima'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -12.0464,
    longitude: -77.0428
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],
  medicalSpecialty: [
    'Medicina Estética',
    'Medicina Antienvejecimiento',
    'Nutrición Funcional',
    'Medicina Hormonal'
  ],
  serviceType: [
    'Medicina Estética Avanzada',
    'Nutrición Funcional & Longevidad',
    'Epigenética y Medicina Predictiva',
    'Yoga & Movimiento Consciente',
    'Medicina Hormonal y Salud Femenina Integral',
    'Experiencias InLuxury & Programas Combinados'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios InLuxury',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medicina Estética Avanzada',
          description: 'Tratamientos estéticos de vanguardia con tecnología avanzada'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nutrición Funcional & Longevidad',
          description: 'Planes nutricionales personalizados para una vida más larga y saludable'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medicina Hormonal',
          description: 'Balance hormonal integral para salud femenina'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function InLuxuryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="degradado-inluxuri-hero lg:min-h-screen relative mb-12 lg:mb-16 xl:mb-20">
        <NavInluxury />
        <HeroSection emailDestino={EMAIL_DESTINATIONS.inluxury} />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <AboutServices />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <Benefits />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <Pillars />
      </div>

      <div className="mb-16 lg:mb-20 xl:mb-24">
        <CtaWhatsApp 
          message="Hola 👋 Vi su página de medicina estética InLuxury. Quiero más información sobre sus tratamientos."
          phoneNumber="+51997621747"
          buttonText="¡Agendar una cita!"
        />
      </div>
      
      <ButtonWsp id="wsp-inlux" message="Hola 👋 Vi su página de medicina estética InLuxury. Quiero más información sobre sus tratamientos." phoneNumber="51997621747" />
      <FooterInlux />
    </>
  );
}
