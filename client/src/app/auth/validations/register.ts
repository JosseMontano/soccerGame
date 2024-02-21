import { z } from "zod";

export const schemaRegister = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must have at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must have at least 8 characters"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // specify the path of the error
  });
