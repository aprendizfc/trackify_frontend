import { ArrowDown, ArrowRight, ArrowUp } from 'react-feather'
import type { Transaction } from '../types'

interface TransactionTypeIconProps {
  type: Transaction['type']
}

export function TransactionTypeIcon({ type }: TransactionTypeIconProps) {
  return (
    <span className={`transaction-${type}`}>
      {type === 'expense' && <ArrowDown />}

      {type === 'income' && <ArrowUp />}

      {type === 'transfer' && <ArrowRight />}
    </span>
  )
}
