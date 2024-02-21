import { z } from "zod";

export const schemaRegister = z
  .object({
    email: z.string().email("Correo electronico invalido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar los terminos y condiciones" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Contraseñas no coinciden",
    path: ["confirmPassword"],
  });
