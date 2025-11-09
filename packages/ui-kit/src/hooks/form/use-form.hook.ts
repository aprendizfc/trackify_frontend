import type { FieldValues, SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useReactHookForm } from 'react-hook-form'

import type { UseFormOptions } from './use-form.hook.type'

export const useForm = <TFormData extends FieldValues = FieldValues>(
  options: UseFormOptions<TFormData>
) => {
  const { schema, ...rest } = options

  const resolver = schema ? zodResolver(schema) : undefined

  const form = useReactHookForm<TFormData>({
    resolver,
    ...rest,
  })

  const { formState, handleSubmit, ...restOfForm } = form

  const useSubmit = (
    onValid: SubmitHandler<TFormData>,
    onInvalid?: SubmitErrorHandler<TFormData>
  ) => {
    const submitHandler = handleSubmit(onValid, onInvalid)

    const handler = async () => {
      try {
        await submitHandler()
      } catch {
        restOfForm.reset(restOfForm.getValues())
      }
    }

    return handler
  }

  return {
    formContext: form,
    formState,
    useSubmit,
    ...restOfForm,
  }
}
