import { cn } from '@trackify/ui-helpers'

import type { CardHeaderProps } from '../types/card.type'

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      data-slot="card-header"
      {...rest}
    >
      {children}
    </div>
  )
}
