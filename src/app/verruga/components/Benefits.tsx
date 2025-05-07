import Image from "next/image";

export const Benefits = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 relative z-20">
      <h2 className=" md:hidden text-mo-brown-base text-center pb-6 text-3xl w-full md:w-1/2">
        Beneficios y características
      </h2>
      <section className="bg-mo-brown-base p-6 md:p-10 lg:p-16 rounded-4xl space-y-6">
        <div className="flex gap-4 items-center">
          <h2 className="hidden md:block text-[#F5E7D3] text-4xl lg:text-5xl w-full md:w-1/2">
            Beneficios y características
          </h2>
          <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
            <Image
              src="/svg/botiquin.svg"
              alt="Beneficios y características"
              width={32}
              height={32}
              className="w-14 pb-8"
            />
            <div className="flex flex-col text-mo-brown-base">
              <p className="font-semibold text-lg">
                Elimina grasa de forma efectiva y segura
              </p>
              <p>con enzimas lipolíticas</p>
            </div>
          </article>
        </div>
        <div className="md:flex gap-6">
          <div className="flex flex-col sm:flex-row md:w-8/12 gap-6 pb-6 md:pb-0">
            <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
              <Image
                src="/svg/botiquin.svg"
                alt="Beneficios y características"
                width={32}
                height={32}
                className="w-14 pb-8"
              />
              <div className="flex flex-col text-mo-brown-base">
                <p className="font-semibold text-lg">No invasivo</p>
                <p>sin agujas ni tiempos de recuperación prolongados.</p>
              </div>
            </article>
            <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
              <Image
                src="/svg/botiquin.svg"
                alt="Beneficios y características"
                width={32}
                height={32}
                className="w-14 pb-8"
              />
              <div className="flex flex-col text-mo-brown-base">
                <p className="font-semibold text-lg">Resultados</p>
                <p>visibles desde la primera sesión.</p>
              </div>
            </article>
          </div>

          <article className="md:w-4/12 bg-ve-pink-bg p-6 rounded-2xl">
            <Image
              src="/svg/botiquin.svg"
              alt="Beneficios y características"
              width={32}
              height={32}
              className="w-14 pb-8"
            />
            <div className="flex flex-col text-mo-brown-base">
              <p className="font-semibold text-lg">
                Moldea tu cuerpo de forma natural
              </p>
              <p>sin efectos secundarios.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
