import { object, string, ref } from 'yup'

export const registerSchema = object({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().email().required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(8, 'Password must be at most 12 characters long'),
  confirmPassword: string()
    .required('Confirm password is required')
    .oneOf([ref('password')], 'Passwords do not match'),
})
