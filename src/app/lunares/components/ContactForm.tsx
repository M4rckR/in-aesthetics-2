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
import { z }from "zod"
import { useEffect, useRef, useState } from "react"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoTimeOutline } from "react-icons/io5"
import { AddClients } from "@/services/AddClients"


const formSchema = z.object({
  nombres: z.string().min(3, { message: "El nombre es requerido" }),
  correo: z.string().email({ message: "Ingrese un correo válido" }),
  telefono: z.string().min(8, { message: "Ingrese un número de teléfono válido" }),
  fecha: z.string().min(1, { message: "Seleccione una fecha" }),
  hora: z.string().min(1, { message: "Seleccione una hora" }),
})

type FormValues = z.infer<typeof formSchema>

export const ContactForm = () => {
    const { isOpen, closeDialog } = useInhaesteticsData();
    const formRef = useRef<HTMLFormElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombres: "",
            correo: "",
            telefono: "",
            fecha: "",
            hora: "",
        },
    });
    
    // Reference to watch date value
    const watchDate = form.watch("fecha");
    
    // Handle keyboard visibility to ensure fields remain visible
    useEffect(() => {
        if (!isOpen) return;

        const handleFocus = (e: FocusEvent) => {
            // Add a small delay to allow the keyboard to appear
            setTimeout(() => {
                if (dialogRef.current && e.target instanceof HTMLElement) {
                    // Get the position of the focused element
                    const targetRect = e.target.getBoundingClientRect();
                    
                    // Calculate if the element is near the bottom of the viewport
                    const viewportHeight = window.innerHeight;
                    const elementBottom = targetRect.bottom;
                    
                    // If the element is in the bottom half of the screen, scroll to it
                    if (elementBottom > viewportHeight * 0.5) {
                        // Get the input's container for better positioning
                        const formItem = e.target.closest('.form-item');
                        if (formItem) {
                            formItem.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center'
                            });
                        } else {
                            e.target.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center'
                            });
                        }
                    }
                }
            }, 400);
        };

        const formNode = formRef.current;
        const inputs = formNode?.querySelectorAll('input');
        inputs?.forEach(input => {
            input.addEventListener('focus', handleFocus as EventListener);
        });

        return () => {
            const inputs = formNode?.querySelectorAll('input');
            inputs?.forEach(input => {
                input.removeEventListener('focus', handleFocus as EventListener);
            });
        };
    }, [isOpen]);

    // Reset form and state when dialog closes
    useEffect(() => {
        if (!isOpen) {
            setSubmitStatus(null);
            form.reset();
        }
    }, [isOpen, form]);

    const onSubmit = async (data: FormValues) => {
        try {
            setIsSubmitting(true);
            setSubmitStatus(null);
            
            // Map form values to match the Client schema structure
            const clientData = {
                nombres: data.nombres,
                correo: data.correo,
                telefono: data.telefono,
                fecha: data.fecha,
                hora: data.hora
            };
            
            await AddClients(clientData);
            
            // Show success message
            setSubmitStatus({
                success: true,
                message: "¡Cita reservada con éxito! Te contactaremos pronto."
            });
            
            // Close dialog after showing success message
            setTimeout(() => {
                closeDialog();
            }, 3000);
            
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            setSubmitStatus({
                success: false,
                message: "No se pudo reservar la cita. Por favor, intenta nuevamente."
            });
        } finally {
            setIsSubmitting(false);
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
                <DialogTitle>¡Reserva tu cita!</DialogTitle>
              </VisuallyHidden>
            </DialogHeader>
            
            {/* Show status message if available */}
            {submitStatus && (
              <div className={`mb-4 p-3 rounded text-center ${
                submitStatus.success 
                  ? "bg-green-100 text-green-800 border border-green-200" 
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:gap-4 py-4">
                <FormField
                  control={form.control}
                  name="nombres"
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
                {/* Stack fields vertically on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
                  <FormField
                    control={form.control}
                    name="fecha"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <div className="relative">
                            <div className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2 text-in-blue-base">
                              <FaRegCalendarAlt size={20} className="text-in-orange-base" />
                            </div>
                            <Input 
                              type="date"
                              min={new Date().toISOString().split('T')[0]}
                              className="border-in-blue-base py-6 pl-3 placeholder:text-base" 
                              {...field} 
                              onChange={(e) => {
                                const selectedDate = e.target.value;
                                const today = new Date().toISOString().split('T')[0];
                                
                                // Prevent selecting dates before today
                                if (selectedDate < today) {
                                  field.onChange(today);
                                  return;
                                }
                                
                                field.onChange(selectedDate);
                              }}
                            />
                            <span className="md:hidden absolute text-base text-in-title-base/80 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              {!field.value && "Fecha"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hora"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormControl>
                          <div className="relative">
                            <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2 text-in-blue-base">
                              <IoTimeOutline size={20} className="text-in-orange-base" />
                            </div>
                            <Input 
                              type="time"
                              className="border-in-blue-base py-6 pl-3 placeholder:text-base"
                              min={watchDate === new Date().toISOString().split('T')[0] ? 
                                new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) : 
                                undefined}
                              {...field}
                              onChange={(e) => {
                                const selectedTime = e.target.value;
                                const today = new Date().toISOString().split('T')[0];
                                
                                // If date is today, validate that time is not in the past
                                if (watchDate === today) {
                                  const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
                                  if (selectedTime < currentTime) {
                                    // Reset to current time if selected time is in the past
                                    field.onChange(currentTime);
                                    return;
                                  }
                                }
                                
                                field.onChange(selectedTime);
                              }}
                            />
                            <span className="md:hidden absolute text-base text-in-title-base/80 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              {!field.value && "Horario"}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-in-brown transition-all duration-300 hover:bg-in-brown/80 text-white py-3 px-12 block text-center rounded-4xl w-full cursor-pointer mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "¡Reserva tu cita ahora!"}
                </button>
              </form>
            </Form>
            <p className="text-in-blue-base text-sm">Al llenar el formulario, Ud. acepta los Términos y Condiciones / Política de Privacidad</p>
          </DialogContent>
        </Dialog>
      )
}
