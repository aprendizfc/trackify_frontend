import type { IconProps } from './Button.types'
import * as styles from './Button.module.css'

export function Icon({ icon }: IconProps) {
  return (
    <span aria-hidden="true" className={styles.buttonIconContent}>
      {icon}
    </span>
  )
}
