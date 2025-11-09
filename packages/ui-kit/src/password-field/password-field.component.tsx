import { useToggle } from '@trackify/ui-helpers'
import { Eye, EyeOff } from 'react-feather'

import type { PasswordFieldProps } from './password-field.type'

import { Button } from '../button/components/button.component'
import { TextField } from '../text-field/text-field.component'

export const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  isLabelVisible = true,
  isRequired,
  label,
  ...rest
}) => {
  const { isActive, toggle } = useToggle()

  return (
    <TextField
      endAdornment={
        <Button
          appearance="ghost"
          aria-label={isActive ? 'Hide password' : 'Show password'}
          onClick={toggle}
          size="xs"
          startAdornment={
            isActive ? (
              <EyeOff focusable={false} role="presentation" />
            ) : (
              <Eye focusable={false} role="presentation" />
            )
          }
          type="button"
        />
      }
      id={id}
      isLabelVisible={isLabelVisible}
      isRequired={isRequired}
      label={label}
      type={isActive ? 'text' : 'password'}
      {...rest}
    />
  )
}
