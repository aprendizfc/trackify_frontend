import cx from '../../../js/utils/classNames/classNames'
import { ErrorInputMessage } from '../error-input-message/error-input-message'
import Label from '../Label/Label'

export interface TextFieldProps extends React.ComponentProps<'input'> {
  id: string
  label: string
  isLabelVisible?: boolean
  isInline?: boolean
  isRequired?: boolean
  value?: string
  defaultValue?: string
  errorMessage?: React.ReactNode
}

export default function TextField({
  label,
  id,
  isLabelVisible = true,
  isInline,
  isRequired,
  className,
  errorMessage,
  ...rest
}: TextFieldProps) {
  return (
    <div
      className={cx({
        'textfield-outer-container': !isInline,
        'textfield-outer-inline-container': isInline,
      })}
    >
      <div className="textfield-label-wrapper">
        <Label htmlFor={id} isVisible={isLabelVisible} isRequired={isRequired}>
          {label}
        </Label>
      </div>

      <div className="textfield-container">
        <input
          {...rest}
          aria-invalid={!!errorMessage}
          aria-describedby={cx({
            [`error-${id}`]: !!errorMessage,
          })}
          required={isRequired}
          id={id}
          className={cx('textfield', className)}
        />

        {errorMessage && <ErrorInputMessage message={errorMessage} id={id} />}
      </div>
    </div>
  )
}
