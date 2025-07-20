import { twMerge } from 'tailwind-merge'

import { clsx } from './clsx/clsx.helper'

export const cn = (...inputs: unknown[]) => {
  return twMerge(clsx(inputs))
}
