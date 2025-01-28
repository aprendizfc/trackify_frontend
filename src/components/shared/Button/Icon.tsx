import type { IconProps } from './Button.types'

export function Icon({ icon }: IconProps) {
  return (
    <span aria-hidden="true" className="btn-icon-content">
      {icon}
    </span>
  )
}
