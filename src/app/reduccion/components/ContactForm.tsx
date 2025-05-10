'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ClientSchema2 } from "@/schemas"
import { Client2 } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import axios from "axios"
import { useState } from "react"

export const ContactForm = () => {

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<Client2>({
    resolver: zodResolver(ClientSchema2),
    defaultValues: {
      nombre: "",
      correo: "",
      mensaje: "",
      telefono: "",
      honeypot: "",
    },
  })

  async function onSubmit(data: Client2) {
    setIsLoading(true)
    try {
      await axios.post("/api/send", data)
      toast.success("Mensaje enviado correctamente")
      form.reset()
    } catch (error) {
      console.log(error)
      toast.error("Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
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
        
        <Button type="submit" onClick={form.handleSubmit(onSubmit)} className={`w-full cursor-pointer bg-transparent text-mo-brown-base border-mo-brown-base border py-6 rounded-full hover:bg-mo-brown-base text-base hover:text-white transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
        {isLoading ? "Enviando..." : "¡Agenda tu consulta ahora!"}
        </Button>
        <p className="text-sm text-mo-brown-base">Al llenar el formulario, Ud. acepta los Términos y Condiciones / Política de Privacidad</p>
      </div>
    </Form>
  ) 
}
