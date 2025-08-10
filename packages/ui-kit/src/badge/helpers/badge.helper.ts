import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full text-xs',
  {
    defaultVariants: {
      appearance: 'primary',
      size: 'medium',
    },
    variants: {
      appearance: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-slate-200 text-slate-800',
        secondary2: 'bg-gray-200 text-gray-800',
      },
      size: {
        large: 'px-4 py-2',
        medium: 'px-3 py-1.5',
        small: 'size-7',
      },
    },
  }
)
