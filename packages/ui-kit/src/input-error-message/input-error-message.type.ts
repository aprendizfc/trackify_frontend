import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface InputErrorMessageProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  id: string
  message: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | string | undefined
}
