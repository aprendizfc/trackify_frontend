import cx from '../../../js/utils/classNames/classNames'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'
import { Icon } from './Icon'
import type { ButtonProps } from './Button.types'
import * as styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  srText,
  srTextPosition = 'left',
  ...rest
}: ButtonProps) {
  const hasIconAndContent: boolean = !!children && !!icon

  return (
    <button
      {...rest}
      className={cx(styles.button, className, {
        [styles.primaryButton]: variant === 'primary',
        [styles.unstyledButton]: variant === 'unstyled',
        [styles.iconButton]: variant === 'icon',
        [styles.SMButton]: size === 'sm',
        [styles.MDButton]: size === 'md',
        [styles.LGButton]: size === 'lg',
        [styles.fullButton]: size === 'full',
      })}
    >
      <span
        className={cx(styles.buttonInnerWrapper, { [styles.hasIcon]: hasIconAndContent })}
      >
        {icon && iconPosition === 'left' && <Icon icon={icon} />}

        <span className={styles.buttonContent}>
          {srText && srTextPosition === 'left' && (
            <VisuallyHidden>{srText}</VisuallyHidden>
          )}

          {children}

          {srText && srTextPosition === 'right' && (
            <VisuallyHidden>{srText}</VisuallyHidden>
          )}
        </span>

        {icon && iconPosition === 'right' && <Icon icon={icon} />}
      </span>
    </button>
  )
}
