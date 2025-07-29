import type { VariantProps } from 'class-variance-authority'

import type { buttonVariants } from './button.helper'

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  adornment?: React.ReactElement
  adornmentPosition?: 'end' | 'start'
  asChild?: boolean
}

export interface ButtonIconProps extends Pick<ButtonProps, 'adornment'> {
  className?: string
}
