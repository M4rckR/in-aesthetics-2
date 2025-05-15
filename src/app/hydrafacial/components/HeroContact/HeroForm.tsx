'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/useContactForm"

export const HeroForm = () => {
  // Usar el hook centralizado con mensaje predeterminado para este formulario
  const { form, isLoading, onSubmit } = useContactForm();

  return (
    <div className="p-0 md:p-6 bg-white">
      <h2 className="font-bold mb-6 text-left text-in-brown text-lg md:text-2xl">Reserva tu evaluación gratuita</h2>
      <Form {...form}>
        <form id="contact-form-hydrafacial" onSubmit={form.handleSubmit(onSubmit)} className="contact-form-hydrafacial space-y-4">
          <FormField
            control={form.control}    
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nombres y Apellidos" className="placeholder:text-in-brown py-6 border-in-brown" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <div className="flex flex-col sm:flex-row gap-4">
            <FormField
                control={form.control}    
                name="correo"
                render={({ field }) => (
                <FormItem className="sm:w-1/2">
                    <FormControl>
                    <Input placeholder="Correo electrónico" className="placeholder:text-in-brown py-6 border-in-brown" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />    

            <FormField
                control={form.control}    
                name="telefono"
                render={({ field }) => (
                <FormItem className="sm:w-1/2">
                    <FormControl>
                    <Input placeholder="Teléfono" className="placeholder:text-in-brown py-6 border-in-brown" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
          
          <FormField
            control={form.control}    
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Zona a tratar..." className="resize-none h-24 md:h-40 placeholder:text-in-brown pt-4 border-in-brown" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className={`w-full text-white text-base bg-in-brown py-6 rounded-4xl cursor-pointer ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {isLoading ? "Enviando..." : "¡Agenda tu consulta ahora!"}
          </Button>
          <p className="text-sm text-mo-brown-base">Al llenar el formulario, Ud. acepta los <span>
          <a href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" className="underline">Términos y Condiciones / Política de Privacidad.</a>
          </span> </p>
        </form>
      </Form>
    </div>
  )
}