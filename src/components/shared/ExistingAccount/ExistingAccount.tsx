import cx from '../../../js/utils/classNames'
import styles from './ExistingAccount.module.css'

export interface ExistingAccountProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export default function ExistingAccount({
  children,
  className,
  ...rest
}: ExistingAccountProps) {
  return (
    <div className={cx(styles.container, className)} {...rest}>
      {children}
    </div>
  )
}
