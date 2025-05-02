import { z } from "zod";

export const ClientSchema = z.object({
    nombres : z.string(),
    correo: z.string(),
    telefono: z.string(),
    fecha: z.string(),
    hora: z.string()
})