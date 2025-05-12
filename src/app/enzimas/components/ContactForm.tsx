'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ClientSchema } from "@/schemas"
import { Client } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import axios, { AxiosError } from "axios"
import { useState } from "react"

export const ContactForm = () => {

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<Client>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      mensaje: "",
      telefono: "",
      honeypot: "",
    },
  })

  async function onSubmit(data: Client) {
    setIsLoading(true)
    try {
      await axios.post("/api/send", data)
      toast.success("Mensaje enviado correctamente")
      form.reset()
    } catch (error) {
      // Manejo específico de errores
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        
        if (axiosError.response) {
          // Error de respuesta del servidor
          if (axiosError.response.status === 500) {
            toast.error("Problemas con el servidor de correo. Intenta más tarde o contáctanos por WhatsApp.");
          } else if (axiosError.response.status === 400) {
            toast.error("Datos inválidos. Verifica la información ingresada.");
          } else {
            toast.error("Error al enviar el mensaje. Intenta nuevamente.");
          }
        } else if (axiosError.request) {
          // No se recibió respuesta del servidor
          toast.error("No se pudo conectar con el servidor. Verifica tu conexión.");
        } else {
          // Error al configurar la solicitud
          toast.error("Ocurrió un error inesperado. Intenta más tarde.");
        }
      } else {
        // Error genérico 
        toast.error("Error al enviar el mensaje")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form id="contact-form-enzimas" onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full space-y-4">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                  className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base"
                    {...field}
                    placeholder="Nombres y Apellidos"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row gap-4">
              <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                  <FormItem className="w-full">
                  <FormControl>
                      <Input
                      className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base" 
                      {...field}
                      type="email"
                      placeholder="Correo electrónico"
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
                  <FormItem className="w-full">
                  <FormControl>
                      <Input
                      className="w-full py-6 border-mo-brown-base placeholder:text-mo-brown-base"
                      {...field}
                      placeholder="Teléfono"
                      />
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
                  <Textarea
                    {...field}
                    placeholder="Mensaje"
                    rows={4}
                    className="resize-none border-mo-brown-base placeholder:text-mo-brown-base    "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    style={{ display: 'none' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className={`w-full cursor-pointer bg-transparent text-mo-brown-base border-mo-brown-base border py-6 rounded-full hover:bg-mo-brown-base text-base hover:text-white transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
          {isLoading ? "Enviando..." : "¡Agenda tu consulta ahora!"}
          </Button>
          <p className="text-sm text-mo-brown-base">Al llenar el formulario, Ud. acepta los <span>
            <a href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" className="underline">Términos y Condiciones / Política de Privacidad.</a>
            </span> </p>
        </div>
      </form>
    </Form>
  ) 
}
