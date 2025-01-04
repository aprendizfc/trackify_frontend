import cx from '@/js/utils/classNames/classNames'
import * as styles from './Text.module.css'

interface TextProps extends React.ComponentProps<'p'> {
  children: React.ReactNode
  size?: 'md' | 'sm' | 'xs'
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary'
}

export function Text({ children, size = 'md', className, weight, color }: TextProps) {
  return (
    <p
      className={cx(styles.text, className, {
        [styles.textXS]: size === 'xs',
        [styles.textSM]: size === 'sm',
        [styles.textMD]: size === 'md',
        [styles.textBold]: weight === 'bold',
        [styles.textLight]: weight === 'light',
        [styles.textSemibold]: weight === 'semibold',
        [styles.textSecondary]: color === 'secondary',
      })}
    >
      {children}
    </p>
  )
}
