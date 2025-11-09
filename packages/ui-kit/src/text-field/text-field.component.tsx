import { cn } from '@trackify/ui-helpers'

import type { TextFieldProps } from './text-field.type'

import { ErrorMessage } from '../input-error-message/input-error-message.component'
import { Input } from '../input/input.component'
import { Label } from '../label/components/label.component'

export const TextField: React.FC<TextFieldProps> = ({
  errorMessage,
  id,
  isLabelVisible = true,
  isRequired,
  label,
  ...rest
}) => {
  return (
    <div className="w-full">
      <Label
        className="pb-1"
        htmlFor={id}
        isRequired={isRequired}
        isVisible={isLabelVisible}
      >
        {label}
      </Label>

      <Input
        aria-describedby={cn({ [`${id}-error`]: errorMessage })}
        aria-invalid={!!errorMessage}
        id={id}
        isRequired={isRequired}
        {...rest}
      />

      {errorMessage ? <ErrorMessage id={`${id}-error`} message={errorMessage} /> : null}
    </div>
  )
}
