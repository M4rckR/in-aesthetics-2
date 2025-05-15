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
import { useEffect, useRef } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/useContactForm"

export const ContactForm = () => {
    const { isOpen, closeDialog } = useInhaesteticsData();
    const formRef = useRef<HTMLFormElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    
    // Usar el hook centralizado con callback para cerrar el diálogo
    const { form, isLoading, onSubmit } = useContactForm({
        onSuccess: () => {
            // Cerrar el diálogo después de mostrar el mensaje de éxito
            setTimeout(() => {
                closeDialog();
            }, 1500);
        }
    });
    
    // Reset form when dialog closes
    useEffect(() => {
        if (!isOpen) {
            form.reset();
        }
    }, [isOpen, form]);

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
              <form id="contact-form-lunares" ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="contact-form-lunares grid gap-4 md:gap-4 py-4">
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
