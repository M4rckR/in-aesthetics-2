export const PromoBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
        <section className="relative">
            <video src="/video/promo-banner.mp4" 
            autoPlay 
            muted 
            loop
            className="h-64 bg-bottom w-full object-cover border-none rounded-2xl mb-6"></video>
            <h1 className="absolute top-1/2 -translate-y-1/2 text-in-title-base px-12 text-xl w-full md:w-1/2 text-center md:text-left">Moldea tu cuerpo sin cirugía con nuestro tratamiento de <span className="font-semibold text-mo-brown-base text-2xl">enzimas  Pb Serum</span> </h1>
        </section>
    </div>
  )
}
