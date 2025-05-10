import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const Reviews = () => {
  return (
    <section  className="container mx-auto max-w-7xl px-4 pt-4 mb-16 md:mb-32">
      <h2 className="text-3xl font-in-playfair md:text-4xl text-center text-in-title-base mb-12">
        Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-in-blue-base justify-items-center">
        <div className="flex flex-col justify-between border border-in-[#FFECE3] p-6 rounded-3xl w-full">
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
            </Avatar>
            <div>
              <p className="font-medium">Lorena Guzmán</p>
              <p>Hace 1 año</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-in-[#FFECE3] p-6 rounded-3xl w-full">
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
              <AvatarFallback>Ag</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Aczell Gamarra</p>
              <p>Hace 1 semana</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-in-[#FFECE3] p-6 rounded-3xl w-full">
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
              <AvatarImage src="/avatars/reviews/user-3.jpg" />
              <AvatarFallback>Mr</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Marcos Romero</p>
              <p>Hace 1 semana</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
