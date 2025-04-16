import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), // teacher ids
  // .max(20, { message: "Username must be at most 20 characters long!" }),
  //   email: z.string().email({ message: "Invalid email address!" }),
  //   password: z
  //     .string()
  //     .min(8, { message: "Password must be at least 8 characters long!" }),
  //   firstName: z.string().min(1, { message: "First Name is Required!" }),
  //   lastName: z.string().min(1, { message: "Last Name is Required!" }),
  //   phone: z.number().min(1, { message: "Phone is Required!" }),
  //   address: z.string().min(1, { message: "Address is Required!" }),
  //   bloodType: z.string().min(1, { message: "Blood Type is Required!" }),
  //   birthday: z.date({ message: "Birthday is Required!" }),
  //   sex: z.enum(["male", "female"], { message: "Sex is Required!" }),
  //   img: z.instanceof(File, { message: "Image is required" }),
});

export type SubjectSchema = z.infer<typeof subjectSchema>;
