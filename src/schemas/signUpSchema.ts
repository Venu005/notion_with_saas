import z from "zod";

export const signUpSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password should be min of 6 characters"),
    confirmPassword: z
      .string()
      .describe("confirm password")
      .min(6, "Passwords should match"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
