import cx from '../../../js/utils/classNames/classNames'
import { ErrorInputMessage } from '../error-input-message/error-input-message'
import Label from '../Label/Label'
import * as styles from './TextField.module.css'

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
        [styles.textFieldOuterContainer]: !isInline,
        [styles.textFieldInlineOuterContainer]: isInline,
      })}
    >
      <div className={styles.textFieldLabelWrapper}>
        <Label htmlFor={id} isVisible={isLabelVisible} isRequired={isRequired}>
          {label}
        </Label>
      </div>

      <div className={styles.textFieldWrapper}>
        <input
          {...rest}
          aria-invalid={!!errorMessage}
          aria-describedby={cx({
            [`error-${id}`]: !!errorMessage,
          })}
          required={isRequired}
          id={id}
          className={cx(styles.textField, className)}
        />

        {errorMessage && <ErrorInputMessage message={errorMessage} id={id} />}
      </div>
    </div>
  )
}
