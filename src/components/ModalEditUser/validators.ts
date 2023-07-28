import { z } from "zod"

export const updateUserSchema = z.object({
    fullname: z.string().min(2).nullable(),
    nickname: z.string().nullable(),
    email: z.string().email().nullable(),
    phoneNumber: z.string().length(11).nullable()
})

export type TUpdateUserData = z.infer<typeof updateUserSchema>