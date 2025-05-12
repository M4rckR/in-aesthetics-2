'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle, 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useInhaesteticsData } from "@/store/InhaesteticsData"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef, useState } from "react"
import { Client } from "@/types"
import { ClientSchema } from "@/schemas"
import { Textarea } from "@/components/ui/textarea"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"


export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, closeDialog } = useInhaesteticsData();
    const formRef = useRef<HTMLFormElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    
    const form = useForm<Client>({
        resolver: zodResolver(ClientSchema),
        defaultValues: {
            nombre: "",
            correo: "",
            telefono: "",
            mensaje: "",
            honeypot: "",
        },
    });
    

    // Reset form when dialog closes
    useEffect(() => {
        if (!isOpen) {
            form.reset();
        }
    }, [isOpen, form]);

    const onSubmit = async (data: Client) => {
        setIsLoading(true);
        try {
            await axios.post("/api/send", data);
            
            // Show success notification with Sonner
            toast.success("¡Mensaje enviado con éxito!");
            
            // Reset form
            form.reset();
            
            // Close dialog after showing success message
            setTimeout(() => {
                closeDialog();
            }, 1500);
            
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            
            // Manejo específico de errores
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                
                if (axiosError.response) {
                    // Error de respuesta del servidor
                    if (axiosError.response.status === 500) {
                        toast.error("Error de conexión. Inténtalo más tarde.");
                    } else if (axiosError.response.status === 400) {
                        toast.error("Datos inválidos. Verifica la información.");
                    } else {
                        toast.error("Error al enviar. Inténtalo nuevamente.");
                    }
                } else if (axiosError.request) {
                    // No se recibió respuesta del servidor
                    toast.error("Sin conexión al servidor.");
                } else {
                    // Error al configurar la solicitud
                    toast.error("Error inesperado. Inténtalo más tarde.");
                }
            } else {
                // Error genérico 
                toast.error("No se pudo enviar el mensaje.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
          <DialogContent 
            ref={dialogRef}
            className="sm:max-w-[540px] w-[95%] max-h-[80vh] md:max-h-[90vh] overflow-y-auto pb-8"
          >
            <DialogHeader className="mb-2">
              <VisuallyHidden>
                <DialogTitle>¡Contáctanos!</DialogTitle>
              </VisuallyHidden>
            </DialogHeader>
            
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:gap-4 py-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormControl>
                        <Input 
                          placeholder="Nombres y Apellidos" 
                          className="border-in-blue-base py-6 placeholder:text-base" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
                {/* Stack fields vertically on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <Input 
                            placeholder="Correo Electrónico" 
                            className="border-in-blue-base py-6 placeholder:text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <Input 
                            maxLength={9}
                            type="tel"
                            placeholder="Teléfono" 
                            className="border-in-blue-base py-6 placeholder:text-base"
                            onInput={(e) => {
                              const input = e.currentTarget;
                              input.value = input.value.replace(/[^0-9]/g, '');
                              field.onChange(input.value);
                            }}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem className="form-item w-full">
                      <FormControl>
                        <Textarea
                          placeholder="Mensaje"
                          className="border-in-blue-base py-6 placeholder:text-base w-full min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
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
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-in-brown transition-all duration-300 hover:bg-in-brown/80 text-white py-3 px-12 block text-center rounded-4xl w-full cursor-pointer mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </Form>
            <p className="text-sm text-mo-brown-base">Al llenar el formulario, Ud. acepta los <span>
          <a href="/pdf/tratamiento-de-datos-personales.pdf" target="_blank" className="underline">Términos y Condiciones / Política de Privacidad.</a>
          </span> </p>
          </DialogContent>
        </Dialog>
      )
}
