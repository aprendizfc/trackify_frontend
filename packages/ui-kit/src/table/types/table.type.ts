import type { TableOptions, Table as TanstackTable } from '@tanstack/react-table'

import type { StackProps } from '@/stack/types/stack.type'

export interface TableProps<TData> {
  className?: string
  rootProps?: StackProps
  table: TanstackTable<TData>
}

export type UseTableOptions<TData> = Omit<TableOptions<TData>, 'getCoreRowModel'>
