import * as styles from './row.module.css'

interface RowProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function Row({ children }: RowProps) {
  return <div className={styles.row}>{children}</div>
}
