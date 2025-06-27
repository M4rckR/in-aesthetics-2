import { z } from "zod";
export const ClientSchema = z.object({
    nombre: z.string()
        .min(2, "Nombre inválido")
        .max(50, "Nombre demasiado largo")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Nombre inválido"),
    telefono: z.string()
        .min(9, "Teléfono muy corto")
        .max(9, "Teléfono muy largo")
        .regex(/^9\d{8}$/, "Teléfono inválido"),
    emailDestino: z.string()
        .email("Email de destino inválido")
        .optional(),
    honeypot: z.string().max(0).optional(),
})





