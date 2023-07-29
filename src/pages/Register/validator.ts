import { z } from "zod"

export const registerSchema = z.object({
    fullname: z.string().nonempty(),
    nickname: z.string().nonempty(),
    email: z.string().email("Please enter a valid email"),
    password: z.string().nonempty("Please enter a password"),
    phoneNumber: z.string().length(11)
})

export type TRegisterData = z.infer<typeof registerSchema>