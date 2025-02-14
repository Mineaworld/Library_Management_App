import z from "zod";

export const SignUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  studentId: z.coerce.number(),
  universityCard: z.string(),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
