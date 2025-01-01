import { useMemo } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../../js/utils/formatMoney/formatMoney'
import * as styles from './Accounts.module.css'

export default function Accounts() {
  const accounts = useMemo(() => {
    return Array.from({ length: 500 }, (v, k) => k).map((account) => (
      <Link to={String(account)} className={styles.account} key={account}>
        <span className={styles.accountHeader}>
          <span className={styles.accountName}>Cash</span>
          <span className={styles.accountType}>Saving Account</span>
        </span>

        <span className={styles.accountBalance}>{formatMoney(1000.12)}</span>
      </Link>
    ))
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.accounts}>{accounts}</div>
    </div>
  )
}
