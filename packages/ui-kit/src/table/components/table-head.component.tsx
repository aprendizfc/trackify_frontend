import { cn } from '@trackify/ui-helpers'

import type { StackProps } from '../../stack/types/stack.type'

import { Stack } from '../../stack/components/stack.component'

export const TableHead: React.FC<StackProps> = ({ children, className, ...rest }) => {
  return (
    <Stack className={cn('text-sm font-normal text-zinc-700', className)} {...rest}>
      {children}
    </Stack>
  )
}
