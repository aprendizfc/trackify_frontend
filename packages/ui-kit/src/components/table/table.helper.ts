import { cva } from 'class-variance-authority'

export const tableVariants = cva('w-full caption-bottom text-sm')

export const tableHeaderVariants = cva(
  '[&_tr]:border-b [&_tr]:border-slate-200'
)

export const tableBodyVariants = cva('[&_tr:last-child]:border-0')

export const tableRowVariants = cva(
  'border-b border-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100'
)

export const tableHeadVariants = cva(
  'h-12 px-4 text-left align-middle font-medium text-slate-500'
)

export const tableCellVariants = cva('p-4 align-middle')

export const tableCaptionVariants = cva('mt-4 text-sm text-slate-500')
