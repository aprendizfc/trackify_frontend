import { cn } from '@trackify/ui-helpers'

import type { CardTitleProps } from '../types/card.type'

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn('leading-6 font-normal', className)}
      data-slot="card-title"
      {...rest}
    >
      {children}
    </div>
  )
}
