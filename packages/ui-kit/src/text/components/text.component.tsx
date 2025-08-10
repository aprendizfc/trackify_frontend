import { cn } from '@trackify/ui-helpers'

import type { TextProps } from '../types/text.type'

export const Text = <T extends React.ElementType = 'p'>({
  align,
  as,
  children,
  className,
  color,
  size = 'md',
  weight = 'normal',
  ...rest
}: TextProps<T>) => {
  const Component = as ?? 'p'

  return (
    <Component
      className={cn(
        {
          'font-bold': weight === 'bold',
          'font-light': weight === 'light',
          'font-medium': weight === 'medium',
          'font-normal': weight === 'normal',
          'font-semibold': weight === 'semibold',
          'text-blue-600': color === 'primary',
          'text-center': align === 'center',
          'text-green-600': color === 'success',
          'text-justify': align === 'justify',
          'text-left': align === 'left',
          'text-lg': size === 'lg',
          'text-md': size === 'md',
          'text-red-600': color === 'error',
          'text-right': align === 'right',
          'text-slate-600': color === 'secondary',
          'text-sm': size === 'sm',
          'text-xl': size === 'xl',
          'text-xs': size === 'xs',
          'text-yellow-600': color === 'warning',
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
