import z from "zod";

export const SignUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  uId: z.coerce.number(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
