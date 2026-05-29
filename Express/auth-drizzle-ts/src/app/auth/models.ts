import {z} from "zod"

export const signupmodel = z.object({
    firstName: z.string().min(3).max(14),
    lastName: z.string().nullable().optional(),
    email: z.email(),
    password: z.string() 
})

export const singinmodel = z.object({
    email: z.email(),
    password: z.string().min(3).max(14)
})