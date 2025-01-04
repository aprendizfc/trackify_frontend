import { formatMoney } from '@/js/utils/formatMoney/formatMoney'
import cx from '@/js/utils/classNames/classNames'
import type { Transaction } from '../types'
import * as styles from './transaction-list-item.module.css'

type Operation = '+' | '-'

interface TransactionAmountProps {
  amount: Transaction['amount']
  type: Transaction['type']
}

export function TransactionAmount({ amount, type }: TransactionAmountProps) {
  const operation: Operation = type === 'income' ? '+' : '-'

  return (
    <span
      className={cx(styles.transactionAmount, {
        [styles.transactionExpense]: type === 'expense',
        [styles.transactionIncome]: type === 'income',
      })}
    >
      {operation}
      {formatMoney(amount)}
    </span>
  )
}
