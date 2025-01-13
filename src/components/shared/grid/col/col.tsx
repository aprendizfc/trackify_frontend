import * as styles from './col.module.css'

interface ColProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function Col({ children }: ColProps) {
  return <div className={styles.col}>{children}</div>
}
