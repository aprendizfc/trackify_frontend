import type { TextFieldProps } from '../text-field/text-field.type'

export interface FormTextfieldProps
  extends Omit<TextFieldProps, 'errorMessage' | 'name'> {
  name: string
}
