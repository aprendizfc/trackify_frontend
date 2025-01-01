import * as styles from './VisuallyHidden.module.css'

interface VisuallyHiddenProps {
  children: React.ReactNode
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className={styles.visuallyHidden}>{children}</span>
}
