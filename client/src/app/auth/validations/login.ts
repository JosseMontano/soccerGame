import { z } from "zod";

export const schemaLogin = z
  .object({
    email: z.string().email("Correo electronico invalido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  })

