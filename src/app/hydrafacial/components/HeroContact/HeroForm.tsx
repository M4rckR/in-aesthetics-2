'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ClientSchema2 } from "@/schemas"
import { Client2 } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { toast } from "sonner"
import { useState } from "react"

export const HeroForm = () => {

  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<Client2>({
    resolver: zodResolver(ClientSchema2),
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: ""
    }
  })

  async function onSubmit(data: Client2) {
      setIsLoading(true)
      try {
        await axios.post("/api/send", data)
        toast.success("Mensaje enviado correctamente")
        form.reset()
      } catch (error) {
        console.log(error)  
      } finally {
        setIsLoading(false)
      }
  }

  return (
    <div className="p-0 md:p-6 bg-white">
      <h2 className="font-bold mb-6 text-left text-in-brown text-lg md:text-2xl">Reserva tu evaluación gratuita</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <p className="text-sm text-in-brown">Al llenar el formulario, Ud. acepta los {' '}<a className="underline" href="#">Términos y Condiciones / Política de Privacidad</a>  </p>
        </form>
      </Form>
    </div>
  )
}