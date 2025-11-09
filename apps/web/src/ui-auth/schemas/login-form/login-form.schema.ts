import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(16),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
