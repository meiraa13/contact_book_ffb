import { z } from "zod"

export const updateContactSchema = z.object({
    fullname: z.string().min(2).nullable(),
    email: z.string().email().nullable(),
    phoneNumber: z.string().length(11).nullable()
})

export type TUpdateContactData = z.infer<typeof updateContactSchema>