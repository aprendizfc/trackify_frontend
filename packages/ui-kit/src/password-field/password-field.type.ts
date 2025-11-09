import type { TextFieldProps } from '../text-field/text-field.type'

export type PasswordFieldProps = Omit<TextFieldProps, 'endAdornment' | 'type'>
