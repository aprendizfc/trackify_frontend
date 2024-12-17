import { useMemo } from 'react'
import Button from '../../components/shared/Button/Button'
import * as styles from './Accounts.module.css'
import { Link } from 'react-router'

export default function Accounts() {
  const accounts = useMemo(() => {
    return Array.from({ length: 500 }, (v, k) => k).map((account) => (
      <Link to={String(account)} className={styles.account} key={account}>
        <span className={styles.accountHeader}>
          <span className={styles.accountName}>Cash</span>
          <span className={styles.accountType}>Saving Account</span>
        </span>

        <span className={styles.accountBalance}>1000</span>
      </Link>
    ))
  }, [])

  return (
    <div className={styles.content}>
      <aside>
        <h1>Accounts</h1>
        <Button size="full">Add Account</Button>
      </aside>

      <div className={styles.accounts}>{accounts}</div>
    </div>
  )
}
