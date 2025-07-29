import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex min-h-8 cursor-pointer items-center justify-center rounded-2xl px-4 py-1 align-middle transition duration-300',
  {
    defaultVariants: {
      appearance: 'primary',
    },
    variants: {
      appearance: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
        secondary2: 'bg-gray-200 text-slate-800 hover:bg-gray-300',
      },
    },
  }
)
