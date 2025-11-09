import type { UseFormReturn } from 'react-hook-form'

export interface FormProps extends Omit<React.ComponentProps<'form'>, 'id'> {
  children: React.ReactNode
  context?: UseFormReturn<any, any>
  name: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}
