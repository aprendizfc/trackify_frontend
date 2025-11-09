import { cn } from '@trackify/ui-helpers'

import type { CardProps } from '../types/card.type'

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hasShadow,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex flex-col rounded-md',
        {
          'shadow-(--shadow)': hasShadow,
        },
        className
      )}
      data-slot="card"
      {...rest}
    >
      {children}
    </div>
  )
}
