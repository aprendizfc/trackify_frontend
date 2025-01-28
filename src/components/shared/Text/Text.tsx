import cx from '@/js/utils/classNames/classNames'

interface TextProps extends React.ComponentProps<'p'> {
  children: React.ReactNode
  size?: 'md' | 'sm' | 'xs'
  className?: string
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
  variant?: 'primary' | 'secondary'
}

export function Text({ children, size = 'md', className, weight, variant }: TextProps) {
  return (
    <p
      className={cx(className, {
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'md',
        'font-bold': weight === 'bold',
        'font-light': weight === 'light',
        'font-medium': weight === 'semibold',
        'text-gray-600': variant === 'secondary',
      })}
    >
      {children}
    </p>
  )
}
