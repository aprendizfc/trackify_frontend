import { flexRender } from '@tanstack/react-table'
import { cn } from '@trackify/ui-helpers'

import type { TableProps } from '../types/table.type'

import { Stack } from '../../stack/components/stack.component'

export const Table = <TData,>({
  rootProps = { direction: 'column' },
  table,
}: TableProps<TData>) => {
  const headers = table.getFlatHeaders()
  const { rows } = table.getRowModel()

  const widths = headers.map((header) => {
    // @ts-expect-error - minWidth is not correctly defined in library types
    // This is a workaround to access the 'meta' property which contains 'minWidth'
    const { minWidth } = header.column.columnDef.meta || {}
    return minWidth ?? '0'
  })

  const gridTemplateColumns = headers
    .map((header) => {
      // @ts-expect-error - 'meta' property type is not correctly defined in library types
      const { minWidth = '1fr' } = header.column.columnDef.meta || {}

      return minWidth
    })
    .join(' ')

  return (
    <Stack {...rootProps} className={cn(rootProps?.className, 'relative isolate')}>
      <table className="grid border-collapse">
        <thead className="sticky top-0 isolate z-2 bg-white">
          <tr
            className='relative grid grid-flow-col justify-start before:absolute before:top-0 before:right-full before:bottom-0 before:w-4 before:bg-white before:content-[""] after:absolute after:top-0 after:bottom-0 after:left-full after:w-4 after:bg-white after:content-[""]'
            style={{ gridTemplateColumns }}
          >
            {headers.map((header) => {
              const minWidth = widths[header.index]

              return (
                <th
                  className="block py-2 pr-4 leading-5"
                  key={header.id}
                  style={{ minWidth }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody className="z-1 block">
          {rows.map((row) => (
            <tr
              className="relative grid grid-flow-col justify-start border-t border-slate-200 before:absolute before:-top-[1px] before:right-full before:-bottom-[1px] before:hidden before:w-4 before:rounded-tl-lg before:rounded-bl-lg before:border-t before:border-b before:border-l before:border-slate-200 before:bg-slate-50 before:content-[''] after:absolute after:-top-[1px] after:-bottom-[1px] after:left-full after:hidden after:w-4 after:rounded-tr-lg after:rounded-br-lg after:border-t after:border-r after:border-b after:border-slate-200 after:bg-slate-50 after:content-[''] last:border-b last:border-b-transparent hover:bg-slate-50 hover:before:block hover:after:block hover:last:border-b hover:last:border-b-slate-200"
              key={row.id}
              style={{ gridTemplateColumns }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="inline-flex h-[50px] items-center py-2 pr-4"
                  key={cell.id}
                  style={{ minWidth: widths[cell.row.index] }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  )
}
