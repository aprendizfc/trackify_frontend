import type { VariantProps } from 'class-variance-authority'

import type { badgeVariants } from './badge.helper'

export interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}
