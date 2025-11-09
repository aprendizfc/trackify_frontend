import { cn } from '@trackify/ui-helpers'

import type { LabelProps } from '../types/label.type'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  isRequired,
  isVisible = true,
  ...rest
}) => {
  return (
    <label
      className={cn(
        'block text-sm font-medium',
        {
          'sr-only': !isVisible,
        },
        className
      )}
      {...rest}
    >
      {children}
      {isRequired && (
        <span aria-hidden="true" className="text-red-500">
          *
        </span>
      )}
    </label>
  )
}
