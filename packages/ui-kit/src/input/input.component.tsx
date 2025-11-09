import { cn } from '@trackify/ui-helpers'
import React from 'react'

import type { InputProps } from './input.type'

import { Stack } from '../stack/components/stack.component'

export const Input: React.FC<InputProps> = ({
  endAdornment,
  isRequired,
  startAdornment,
  ...rest
}) => {
  return (
    <Stack className="group relative">
      {startAdornment && (
        <span className="absolute top-1/2 left-3 -translate-y-1/2 [&>svg]:size-3">
          {startAdornment}
        </span>
      )}

      <input
        className={cn(
          'w-full rounded border border-gray-400 px-3 py-2 outline-0 focus:border-blue-500',
          {
            'pl-11': startAdornment,
            'pr-11': endAdornment,
          }
        )}
        required={isRequired}
        {...rest}
      />

      {endAdornment && (
        <span className="absolute top-1/2 right-3 -translate-y-1/2 [&>svg]:size-3">
          {endAdornment}
        </span>
      )}
    </Stack>
  )
}
