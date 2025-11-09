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
      {/* {startAdornment && (
        <span className="inline-flex items-center justify-center rounded-tl rounded-bl border-t border-b border-l border-gray-400 py-2 pl-3 group-has-focus-within:border-blue-500 [&>svg]:size-3">
          {startAdornment}
        </span>
      )} */}
      {startAdornment && (
        <span className="absolute top-1/2 left-3 -translate-y-1/2 [&>svg]:size-3">
          {startAdornment}
        </span>
      )}

      <input
        className={cn(
          //   'w-full border-t border-b border-gray-400 px-3 py-2 outline-0 focus:border-blue-500',
          'w-full rounded border border-gray-400 px-3 py-2 outline-0 focus:border-blue-500',
          {
            'pl-11': startAdornment,
            'pr-11': endAdornment,
          }
        )}
        required={isRequired}
        {...rest}
      />

      {/* {endAdornment && (
        <span className="rounded-tr rounded-br border-t border-r border-b border-gray-400 py-2 pr-3 group-has-focus-within:border-blue-500 [&>svg]:size-3">
          {endAdornment}
        </span>
      )} */}
      {endAdornment && (
        <span className="absolute top-1/2 right-3 -translate-y-1/2 [&>svg]:size-3">
          {endAdornment}
        </span>
      )}
    </Stack>
  )
}
