import { cn } from '@trackify/ui-helpers'

import type { CardDescriptionProps } from '../types/card.type'

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="card-description"
      {...rest}
    >
      {children}
    </div>
  )
}
