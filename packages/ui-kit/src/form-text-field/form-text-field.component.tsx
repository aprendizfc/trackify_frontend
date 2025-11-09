import { Controller, get, useFormContext } from 'react-hook-form'

import type { FormTextfieldProps } from './form-text-field.type'

import { TextField } from '../text-field/text-field.component'

export const FormTextField: React.FC<FormTextfieldProps> = ({ name, ...rest }) => {
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
        <TextField
          {...field}
          {...rest}
          errorMessage={errorMessage}
          //   isInvalid={isInvalid}
        />
      )}
    />
  )
}
