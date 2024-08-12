import * as z from "zod";

const AuthSchema: z.ZodType<Omit<UserLogin, "remember_me">> = z.object({
  email: z.string().email().min(1, { message: "Email Address is required" }),
  password: z.string().min(1, { message: "Address is required" }),
});

export default AuthSchema;
