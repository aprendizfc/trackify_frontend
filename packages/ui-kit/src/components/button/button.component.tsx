import { Slot } from '@radix-ui/react-slot'
import { cn } from '@trackify/ui-helpers'
import React from 'react'

import type { ButtonProps } from './button.type'

import { ButtonIcon } from './button-icon.component'
import { buttonVariants } from './button.helper'

export const Button: React.FC<ButtonProps> = ({
  adornment,
  adornmentPosition = 'start',
  appearance,
  asChild,
  children,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'button'
  const adornmentIsOnlyChild = !!(React.Children.count(children) === 0 && adornment)

  return (
    <Component
      data-slot="button"
      {...props}
      className={cn(buttonVariants({ appearance, className }))}
    >
      <span
        className={cn('inline-flex items-center justify-center', {
          absolute: adornmentIsOnlyChild,
          'gap-2': !adornmentIsOnlyChild,
        })}
      >
        {adornment && adornmentPosition === 'start' && (
          <ButtonIcon adornment={adornment} />
        )}

        {children}

        {adornment && adornmentPosition === 'end' && <ButtonIcon adornment={adornment} />}
      </span>
    </Component>
  )
}
