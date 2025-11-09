import { Slot } from '@radix-ui/react-slot'
import { cn } from '@trackify/ui-helpers'
import React from 'react'

import type { ButtonProps } from '../types/button.type'

import { buttonVariants } from '../helpers/button.helper'
import { ButtonIcon } from './button-icon.component'

export const Button: React.FC<ButtonProps> = ({
  appearance,
  asChild,
  children,
  className,
  endAdornment,
  size,
  startAdornment,
  ...props
}) => {
  const Component = asChild ? Slot : 'button'
  const adornmentIsOnlyChild = !!(
    React.Children.count(children) === 0 &&
    (startAdornment || endAdornment)
  )

  return (
    <Component
      data-slot="button"
      {...props}
      className={cn(
        buttonVariants({ appearance, size }),
        {
          'px-0': adornmentIsOnlyChild,
        },
        className
      )}
    >
      <span
        className={cn('inline-flex items-center justify-center', {
          absolute: adornmentIsOnlyChild,
          'gap-2': !adornmentIsOnlyChild,
        })}
      >
        {startAdornment && <ButtonIcon adornment={startAdornment} size={size} />}

        {children}

        {endAdornment && <ButtonIcon adornment={endAdornment} size={size} />}
      </span>
    </Component>
  )
}
