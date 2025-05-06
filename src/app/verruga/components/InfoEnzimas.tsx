import Image from "next/image";

export const InfoEnzimas = () => {
  return (
    <section className="bg-white rounded-tl-4xl rounded-tr-4xl py-24">
      <div className="container max-w-7xl mx-auto px-4 lg:px-32 space-y-12">
        <h2 className="text-2xl text-center md:text-left md:text-4xl lg:text-6xl text-mo-brown-base mb-4 md:mb-12">
          Las enzimas Pb serum
        </h2>
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-12 space-y-12">
            <Image 
                src="/images/reduccion/encimas-pb-serum.png"
                alt="Enzimas Pb serum"
                width={1000}
                height={1000}
                className="w-full max-w-[600px] mx-auto md:mx-0 object-cover shadow-lg md:w-1/2 md:mt-12"
            />
            <div className="max-w-[600px] md:w-1/2 mx-auto md:mx-0">
                <Image 
                    src="/images/reduccion/encimas-pb-serum-2.png"
                    alt="Enzimas Pb serum"
                    width={1000}    
                    height={1000}
                    className="w-full object-cover shadow-lg mb-4"
                />
                <p className="text-mo-brown-base">Disuelven la grasa localizada de forma rápida y efectiva. Este tratamiento no invasivo es ideal para zonas como abdomen, brazos, piernas y papada, brindando resultados visibles desde la primera sesión.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
