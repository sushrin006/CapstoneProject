import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required"),
});
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
