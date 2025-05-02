import { z } from "zod";

export const ClientSchema = z.object({
    nombres : z.string(),
    correo: z.string(),
    telefono: z.string(),
    fecha: z.string(),
    hora: z.string()
})

export const ClientSchema2 = z.object({
    nombre: z.string()
        .min(2, "Nombre inválido")
        .max(50, "Nombre demasiado largo")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Nombre inválido"),
    correo: z.string()
        .email("Correo inválido")
        .toLowerCase(),
    telefono: z.string()
        .min(9, "Teléfono demasiado corto")
        .max(9, "Teléfono demasiado largo")
        .regex(/^\d+$/, "Teléfono inválido"),
    mensaje: z.string()
        .min(5, "Mensaje demasiado corto")
        .max(500, "Mensaje demasiado largo")
        .optional(),
})



