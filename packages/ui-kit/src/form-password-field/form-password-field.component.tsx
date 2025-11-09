import { Controller, get, useFormContext } from 'react-hook-form'

import type { FormPasswordFieldProps } from './form-password-field.type'

import { PasswordField } from '../password-field/password-field.component'

export const FormPasswordField: React.FC<FormPasswordFieldProps> = ({
  name,
  ...rest
}) => {
  const { control, formState } = useFormContext()

  //   const isInvalid = !!formState.errors[name]
  const error =
    formState.errors[name] ?? (name.includes('.') ? get(formState.errors, name) : null)
  const errorMessage = error?.message

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <PasswordField
          {...field}
          {...rest}
          errorMessage={errorMessage}
          //   isInvalid={isInvalid}
        />
      )}
    />
  )
}
