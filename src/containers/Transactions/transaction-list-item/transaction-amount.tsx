import { formatMoney } from '@/js/utils/formatMoney/formatMoney'
import type { Transaction } from '../types'

type Operation = '+' | '-'

interface TransactionAmountProps {
  amount: Transaction['amount']
  type: Transaction['type']
}

export function TransactionAmount({ amount, type }: TransactionAmountProps) {
  const operation: Operation = type === 'income' ? '+' : '-'

  return (
    <span className={`font-medium transaction-${type}`}>
      {operation}
      {formatMoney(amount)}
    </span>
  )
}
