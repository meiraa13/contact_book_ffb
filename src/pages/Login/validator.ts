import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Must be a valid email address"),
    password: z.string().nonempty("can't be blank")
})

export type TLoginData = z.infer<typeof loginSchema>

