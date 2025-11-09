import type { PasswordFieldProps } from '../password-field/password-field.type'

export interface FormPasswordFieldProps
  extends Omit<PasswordFieldProps, 'errorMessage' | 'name'> {
  name: string
}
