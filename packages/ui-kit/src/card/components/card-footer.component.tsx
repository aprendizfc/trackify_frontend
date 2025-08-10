import { cn } from '@trackify/ui-helpers'

import type { CardFooterProps } from '../types/card.type'

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      data-slot="card-footer"
      {...rest}
    >
      {children}
    </div>
  )
}
