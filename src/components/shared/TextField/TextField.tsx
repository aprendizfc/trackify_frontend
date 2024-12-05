import cx from '../../../js/utils/classNames'
import Label from '../Label/Label'
import styles from './TextField.module.css'

export interface TextFieldProps extends React.ComponentProps<'input'> {
  label: string
  isLabelVisible?: boolean
  isInline?: boolean
}

export default function TextField({
  label,
  id,
  isLabelVisible = true,
  className,
  isInline,
  ...rest
}: TextFieldProps) {
  return (
    <div
      className={cx({
        [styles.trackifyTextFieldOuterContainer]: !isInline,
        [styles.trackifyTextFieldInlineOuterContainer]: isInline,
      })}
    >
      <div className={styles.trackifyTextFieldLabelWrapper}>
        <Label htmlFor={id} isVisible={isLabelVisible}>
          {label}
        </Label>
      </div>

      <div className={styles.trackifyTextFieldWrapper}>
        <input id={id} {...rest} className={cx(styles.trackifyTextField, className)} />
      </div>
    </div>
  )
}
