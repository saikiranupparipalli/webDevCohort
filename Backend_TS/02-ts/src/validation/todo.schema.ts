import { z } from 'zod'

export const todoValidationSchema = z.object({
  id: z.string().describe('ID of the user'),
  age: z.number().describe('age of the user'),
  role: z.string().describe('role of the user'),
  cabin: z.number().optional().describe('cabin of the user'),
})

export type Todo = z.infer<typeof todoValidationSchema>
// export interface ITodo {
//   id: string
//   age: number
//   role: string
//   cabin: number
// }