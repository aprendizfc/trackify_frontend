import cx from '../../../js/utils/classNames/classNames'
import type { ButtonProps } from './Button.types'
import { ButtonContent } from '../button-content/button-content'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  srText,
  srTextPosition = 'left',
  isDisabled,
  shouldFitContainer,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      className={cx(`btn btn-${variant} btn-${size}`, className, {
        'btn-disabled': isDisabled,
        'btn-fit-container': shouldFitContainer,
      })}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        srText={srText}
        srTextPosition={srTextPosition}
      >
        {children}
      </ButtonContent>
    </button>
  )
}
