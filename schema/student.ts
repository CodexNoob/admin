import { z } from "zod";

export const studentSchema = z.object({
  studentId: z.string(),
  username: z.string(),
  name: z.string().min(1),
  surname: z.string().min(1),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  sex: z.enum(["MALE", "FEMALE"]),
  birthday: z.number(),
});

export type StudentZod = z.infer<typeof studentSchema>;
