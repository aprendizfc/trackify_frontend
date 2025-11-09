import type { InputErrorMessageProps } from '../input-error-message/input-error-message.type'
import type { InputProps } from '../input/input.type'

export interface TextFieldProps extends InputProps {
  errorMessage?: InputErrorMessageProps['message']
  id: string
  isLabelVisible?: boolean
  label: string
}
