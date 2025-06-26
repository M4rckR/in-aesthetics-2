import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import 'swiper/css';
import "swiper/css/effect-fade";
import "@/styles/index.css"; 
import 'aos/dist/aos.css'
import { AOSInit } from "@/components/aosInit/aosInit";
import { Toaster } from "sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next"
import localFont from 'next/font/local'

const ProximaNova = localFont({
  src: '../../public/fonts/ele.otf',
  variable: "--font-in-crisfont",
  display: "swap",
  weight: "800",
})

const playfair = Playfair_Display({
  variable: "--font-in-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-in-poppins",
  subsets: ["latin"],
  weight: ["500", "400"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://app.inaesthetics.pe'),
  title: "Inaesthetics | Estética Natural y Bienestar en Lima",
  description: "Tratamientos estéticos seguros y naturales en Inaesthetics. Técnicas no invasivas con equipo médico especializado. Belleza y bienestar en un solo lugar.",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://inaesthetics.pe',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning  className="h-full scroll-smooth">
      <GoogleTagManager gtmId="GTM-P5VN8HXJ" />
      <AOSInit />
      <body suppressHydrationWarning
        className={`${poppins.variable} ${playfair.variable} ${ProximaNova.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5VN8HXJ"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Toaster/>
        <main className="flex-grow">
          {children}
        </main>

        <GoogleAnalytics gaId="G-6YF0S48H61" />
        <Analytics />
      </body>
    </html>
  );
}
