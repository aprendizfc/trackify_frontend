import styles from './Container.module.css'

export interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>
}
