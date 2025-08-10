import { cn } from '@trackify/ui-helpers'

import type { ButtonIconProps } from '../types/button.type'

export const ButtonIcon: React.FC<ButtonIconProps> = ({ adornment, className }) => {
  return (
    <span aria-hidden="true" className={cn('[&>svg]:size-3.5', className)}>
      {adornment}
    </span>
  )
}
