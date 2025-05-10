import { z } from "zod";
export const ClientSchema = z.object({
    nombre: z.string()
        .min(2, "Nombre inválido")
        .max(50, "Nombre demasiado largo")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Nombre inválido"),
    correo: z.string()
        .email("Correo inválido")
        .toLowerCase(),
    telefono: z.string()
        .min(9, "Teléfono muy corto")
        .max(9, "Teléfono muy largo")
        .regex(/^\d+$/, "Teléfono inválido"),
    mensaje: z.string()
        .min(5, "Mensaje demasiado corto")
        .max(500, "Mensaje demasiado largo")
        .optional(),
    honeypot: z.string().max(0).optional(),
})





