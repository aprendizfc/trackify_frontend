import type { FieldValues, UseFormProps } from 'react-hook-form'

export type UseFormOptions<TFormData extends FieldValues, TZodSchema = any> = Omit<
  UseFormProps<TFormData, TZodSchema>,
  'resolver'
> & {
  schema?: TZodSchema
}
