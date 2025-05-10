
import { ClientSchema } from "@/schemas";
import { z } from "zod";

export type RedSocial = {
    alt:string
    src:string
    href:string
}

export type Client = z.infer<typeof ClientSchema>   