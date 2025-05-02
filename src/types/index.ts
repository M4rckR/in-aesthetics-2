
import { ClientSchema, ClientSchema2 } from "@/schemas";
import { z } from "zod";

export type RedSocial = {
    alt:string
    src:string
    href:string
}

export type Client = z.infer<typeof ClientSchema>   
export type Client2 = z.infer<typeof ClientSchema2>