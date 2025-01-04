import { ArrowDown, ArrowRight, ArrowUp } from 'react-feather'
import cx from '@/js/utils/classNames/classNames'
import type { Transaction } from '../types'
import * as styles from './transaction-list-item.module.css'

interface TransactionTypeIconProps {
  type: Transaction['type']
}

export function TransactionTypeIcon({ type }: TransactionTypeIconProps) {
  return (
    <span
      className={cx({
        [styles.transactionExpense]: type === 'expense',
        [styles.transactionIncome]: type === 'income',
      })}
    >
      {type === 'expense' && <ArrowDown />}

      {type === 'income' && <ArrowUp />}

      {type === 'transfer' && <ArrowRight />}
    </span>
  )
}
