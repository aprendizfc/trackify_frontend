import { cn } from '@trackify/ui-helpers'

import type { CardProps } from './card.type'

export const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn('flex flex-col rounded-md shadow-(--shadow)', className)}
      data-slot="card"
      {...rest}
    >
      {children}
    </div>
  )
}
