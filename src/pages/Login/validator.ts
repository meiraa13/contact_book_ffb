import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().nonempty("Please enter a password")
})

export type TLoginData = z.infer<typeof loginSchema>

