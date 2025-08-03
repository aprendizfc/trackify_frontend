import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { cn } from '@trackify/ui-helpers'
import React from 'react'

import {
  tableBodyVariants,
  tableCellVariants,
  tableHeadVariants,
  tableHeaderVariants,
  tableRowVariants,
  tableVariants,
} from './table.helper'
import type { TableProps } from './table.type'

export const Table = <TData, TValue>({
  columns,
  data,
}: TableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full overflow-auto">
      <table className={cn(tableVariants())}>
        <thead className={cn(tableHeaderVariants())}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className={cn(tableHeadVariants())}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className={cn(tableBodyVariants())}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cn(tableRowVariants())}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={cn(tableCellVariants())}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
