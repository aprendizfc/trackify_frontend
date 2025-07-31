import { cn } from '@trackify/ui-helpers'

import type { CardActionProps } from './card.type'

export const CardAction: React.FC<CardActionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className
      )}
      data-slot="card-action"
      {...rest}
    >
      {children}
    </div>
  )
}
