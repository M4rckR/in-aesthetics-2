"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

export const SimpleForm = () => {
  const { form, isLoading, onSubmit } = useContactForm();
  return (
    <div>
      <h2 className="mb-3 text-center md:text-left font-semibold md:font-normal text-in-brown text-2xl md:text-base lg:text-xl">
        ¡Reserva tu cita ahora!
      </h2>
      <Form {...form}>
        <form
          id="contact-form-hydrafacial"
          onSubmit={form.handleSubmit(onSubmit)}
          className="contact-form-hydrafacial space-y-4 max-w-[500px] mx-auto md:mx-0"
        >
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mb-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2">
                  <FormControl>
                    <Input
                      placeholder="Nombres y Apellidos"
                      className="placeholder:text-in-brown py-6 border-in-brown"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/2  ">
                  <FormControl>
                    <Input
                      placeholder="Teléfono"
                      className="placeholder:text-in-brown py-6 border-in-brown"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className={`w-full text-white text-base bg-in-brown py-6 rounded-4xl cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
          <p className="text-xs text-center md:text-left text-mo-brown-base">
          Al completar el formulario, acepta los {" "}
            <span>
              <a
                href="/pdf/tratamiento-de-datos-personales.pdf"
                target="_blank"
                className="underline"
              >
                Términos y la Política de Privacidad.
              </a>
            </span>{" "}
          </p>
        </form>
      </Form>
    </div>
  );
};
