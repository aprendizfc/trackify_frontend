import cx from '../../../js/utils/classNames'
import styles from './Button.module.css'

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary'
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
}: ButtonProps) {
  return (
    <button
      className={cx(styles.trackifyButton, {
        [styles.trackifyPrimaryButton]: variant === 'primary',
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
