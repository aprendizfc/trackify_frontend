import { getCoreRowModel, useReactTable } from '@tanstack/react-table'

import type { UseTableOptions } from '../../types/table.type'

export const useTable = <TData>(options: UseTableOptions<TData>) => {
  return useReactTable<TData>({
    ...options,
    getCoreRowModel: getCoreRowModel(),
  })
}
