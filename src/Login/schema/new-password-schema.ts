import { z } from "zod";

export const NewPasswordSchema = z.object({
 
  newPassword: z.string().min(1, "New password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
}).superRefine((data, ctx) => {
  if (data.newPassword !== data.confirmPassword) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
    });
  }
});

export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;
