import { cn } from '@trackify/ui-helpers'

import type { CardContentProps } from '../types/card.type'

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn(className)} data-slot="card-content" {...rest}>
      {children}
    </div>
  )
}
