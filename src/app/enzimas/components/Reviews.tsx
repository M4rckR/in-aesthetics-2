import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Reviews = () => {
  return (
    <div className="bg-in-pink pb-16 md:pb-32 xl:px-36">
      <section className="container mx-auto max-w-7xl px-4 pt-4 ">
        <h2 className="text-3xl md:text-5xl text-center text-mo-brown-base mb-12">
        Reseñas y Calificaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-in-blue-base justify-items-center">
        <div className="flex flex-col justify-between border border-in-[#FFECE3] bg-white p-6 rounded-3xl w-full">
          <div className="space-y-2 pb-16">
            <Image
              src="/svg/stars.svg"
              alt="Review 1"
              width={24}
              height={24}
              className="w-40"
            />
            <p className="font-medium">
            Me encantó el tratamiento y la atención
            Muy lindo todo. Volveré.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Avatar className="w-16 h-16">
              <AvatarFallback>Lg</AvatarFallback>
              <AvatarImage src="/images/testimonials/avatars/enzimas/avatar-7.jpeg" />
            </Avatar>
            <div>
              <p className="font-medium">Lorena Guzmán</p>
              <p>Hace 1 año</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-in-[#FFECE3] bg-white p-6 rounded-3xl w-full">
          <div className="space-y-2 pb-16">
            <Image
              src="/svg/stars.svg"
              alt="Review 1"
              width={24}
              height={24}
              className="w-40"
            />
            <p className="font-medium">
            Muy buena atención y profesionales de calidad..
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Avatar className="w-16 h-16">
              <AvatarFallback>Pg</AvatarFallback>
              <AvatarImage src="/images/testimonials/avatars/enzimas/avatar-5.jpeg" />
            </Avatar>
            <div>
              <p className="font-medium">Patricia Gamarra</p>
              <p>Hace 1 semana</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-in-[#FFECE3] bg-white p-6 rounded-3xl w-full">
          <div className="space-y-2 pb-16">
            <Image
              src="/svg/stars.svg"
              alt="Review 1"
              width={24}
              height={24}
              className="w-40"
            />
            <p className="font-medium">
              Desde que tuve mi primera sesión de Hydrafacial he sentido cambios significativos en mi piel.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="w-16 h-16">
              <AvatarImage alt="Marcos Romero" src="/images/testimonials/avatars/enzimas/avatar-6.jpeg" />
              <AvatarFallback>Dr</AvatarFallback>

            </Avatar>
            <div>
              <p className="font-medium">Daniela Romero</p>
              <p>Hace 1 semana</p>
            </div>
          </div>
        </div>


        </div>
      </section>
    </div>
  );
};
