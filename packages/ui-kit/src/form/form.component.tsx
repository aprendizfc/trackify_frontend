import { FormProvider } from 'react-hook-form'

import type { FormProps } from './form.type'

export const Form: React.FC<FormProps> = ({
  children,
  context,
  name,
  onSubmit,
  ...rest
}) => {
  // const isLoading = context?.formState.isLoading ?? false
  const formId = `${name}-form`

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (onSubmit) {
      // we can use this to debug in production
      // const values = context?.getValues() ?? {}

      onSubmit(e)
    }
  }

  if (context) {
    return (
      <FormProvider {...context}>
        <form id={formId} name={name} onSubmit={handleSubmit} {...rest}>
          {children}
        </form>
      </FormProvider>
    )
  }

  return (
    <form id={formId} name={name} onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  )
}
