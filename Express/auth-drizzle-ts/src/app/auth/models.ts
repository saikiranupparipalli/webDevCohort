import {z} from "zod"

export const signupmodel = z.object({
    firstName: z.string().min(3).max(14),
    lastName: z.string().nullable().optional(),
    email: z.email(),
    password: z.string() 
})