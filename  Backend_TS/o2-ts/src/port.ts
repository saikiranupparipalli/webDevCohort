import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional()
})

function createEnv(env: NodeJS.ProcessEnv) {
  const parseResult = envSchema.safeParse(env)
  if (!parseResult.success) throw new Error(parseResult.error.message)
  return parseResult.data
}

export const env = createEnv(process.env)