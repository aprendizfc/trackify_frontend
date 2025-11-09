import z from 'zod'

export const registerSchema = z
  .object({
    confirmPassword: z.string().min(8).max(16),
    email: z.email(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    password: z.string().min(8).max(16),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterSchema = z.infer<typeof registerSchema>
