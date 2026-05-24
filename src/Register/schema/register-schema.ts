import z from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
export type RegisterSchema = z.infer<typeof registerSchema>;
