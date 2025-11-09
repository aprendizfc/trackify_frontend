import type { VariantProps } from 'class-variance-authority'

import type { buttonVariants } from '../helpers/button.helper'

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  endAdornment?: React.ReactElement
  startAdornment?: React.ReactElement
}

export interface ButtonIconProps {
  adornment: React.ReactElement
  className?: string
  size?: ButtonProps['size']
}
