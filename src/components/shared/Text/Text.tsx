import cx from '@/js/utils/classNames/classNames'
import * as styles from './Text.module.css'

interface TextProps extends React.ComponentProps<'p'> {
  children: React.ReactNode
  size?: 'md' | 'sm' | 'xs'
}

export function Text({ children, size = 'md' }: TextProps) {
  return (
    <p
      className={cx(styles.text, {
        [styles.textXS]: size === 'xs',
        [styles.textSM]: size === 'sm',
        [styles.textMD]: size === 'md',
      })}
    >
      {children}
    </p>
  )
}
