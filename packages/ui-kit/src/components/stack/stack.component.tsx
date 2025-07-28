import { cn } from '@trackify/ui-helpers'

import type { StackProps } from './stack.type'

export const Stack: React.FC<StackProps> = ({
  alignItems,
  alignSelf,
  children,
  className,
  direction,
  gap,
  justifyContent,
  wrap,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex',
        {
          'flex-col': direction === 'column',
          'flex-col-reverse': direction === 'column-reverse',
          'flex-nowrap': wrap === 'nowrap',
          'flex-row': direction === 'row',
          'flex-row-reverse': direction === 'row-reverse',
          'flex-wrap': wrap === 'wrap',
          'flex-wrap-reverse': wrap === 'wrap-reverse',
          'gap-1': gap === 1,
          'gap-10': gap === 10,
          'gap-2': gap === 2,
          'gap-3': gap === 3,
          'gap-4': gap === 4,
          'gap-5': gap === 5,
          'gap-6': gap === 6,
          'gap-7': gap === 7,
          'gap-8': gap === 8,
          'gap-9': gap === 9,
          'items-baseline': alignItems === 'baseline',
          'items-center': alignItems === 'center',
          'items-end': alignItems === 'end',
          'items-start': alignItems === 'start',
          'items-stretch': alignItems === 'stretch',
          'justify-around': justifyContent === 'around',
          'justify-between': justifyContent === 'between',
          'justify-center': justifyContent === 'center',
          'justify-end': justifyContent === 'end',
          'justify-evenly': justifyContent === 'evenly',
          'justify-start': justifyContent === 'start',
          'self-baseline': alignSelf === 'baseline',
          'self-center': alignSelf === 'center',
          'self-end': alignSelf === 'end',
          'self-start': alignSelf === 'start',
          'self-stretch': alignSelf === 'stretch',
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
