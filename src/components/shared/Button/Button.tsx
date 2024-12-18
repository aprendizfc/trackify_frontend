import cx from '../../../js/utils/classNames/classNames'
import styles from './Button.module.css'

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'unstyled'
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
}: ButtonProps) {
  return (
    <button
      className={cx(styles.trackifyButton, className, {
        [styles.trackifyPrimaryButton]: variant === 'primary',
        [styles.trackifyUnstyledButton]: variant === 'unstyled',
        [styles.trackifySMButton]: size === 'sm',
        [styles.trackifyMDButton]: size === 'md',
        [styles.trackifyLGButton]: size === 'lg',
        [styles.trackifyFullButton]: size === 'full',
      })}
    >
      {children}
    </button>
  )
}
