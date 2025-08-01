import { Slot } from '@radix-ui/react-slot'
import { cn } from '@trackify/ui-helpers'

import type { BadgeProps } from './badge.type'

import { badgeVariants } from './badge.helper'

export const Badge: React.FC<BadgeProps> = ({
  appearance,
  asChild,
  children,
  className,
  size,
  ...rest
}) => {
  const Component = asChild ? Slot : 'span'
  return (
    <Component
      className={cn(badgeVariants({ appearance, className, size }))}
      data-slot="badge"
      {...rest}
    >
      {children}
    </Component>
  )
}
