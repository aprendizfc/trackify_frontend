import { cn } from '@trackify/ui-helpers'

import type { ButtonIconProps } from '../types/button.type'

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  adornment,
  className,
  size = 'md',
}) => {
  return (
    <span
      aria-hidden="true"
      className={cn(
        '[&>svg]:size-3',
        {
          '[&>svg]:size-3': size === 'xs',
          '[&>svg]:size-3.5': size === 'sm',
          '[&>svg]:size-4': size === 'md',
          '[&>svg]:size-5': size === 'lg',
        },
        className
      )}
    >
      {adornment}
    </span>
  )
}
