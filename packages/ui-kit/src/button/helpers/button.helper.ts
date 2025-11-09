import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center rounded-full align-middle outline-0 outline-blue-500 transition duration-300 focus:outline-1 focus:outline-offset-2',
  {
    compoundVariants: [
      {
        appearance: 'link',
        className: 'h-auto p-0',
        size: ['lg', 'md', 'sm', 'xs'],
      },
    ],
    defaultVariants: {
      appearance: 'primary',
      size: 'md',
    },
    variants: {
      appearance: {
        ghost: 'bg-transparent text-slate-800 hover:bg-slate-100',
        link: 'text-blue-500 hover:text-blue-600 hover:underline',
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
        secondary2: 'bg-gray-200 text-slate-800 hover:bg-gray-300',
      },
      size: {
        lg: 'h-12 min-w-12 px-6 text-lg',
        md: 'h-10 min-w-10 px-6 text-base',
        sm: 'h-8 min-w-8 px-4 py-1 text-sm',
        xs: 'h-7 min-w-7 px-3 text-xs',
      },
    },
  }
)
