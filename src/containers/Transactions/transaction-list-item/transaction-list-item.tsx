import { Text } from '@/components/shared/Text/Text'
import { TransactionTypeIcon } from './transaction-type-icon'
import { TransactionAmount } from './transaction-amount'
import type { Transaction } from '../types'
import { TransactionDateCategory } from './transaction-date-category'

interface TransactionListItemProps extends React.ComponentProps<'li'> {
  transaction: Transaction
}

export function TransactionListItem({ transaction }: TransactionListItemProps) {
  return (
    <li className="transaction">
      <div className="transaction-info">
        <TransactionTypeIcon type={transaction.type} />

        <div>
          <Text weight="semibold">{transaction.description}</Text>

          <TransactionDateCategory
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      </div>

      <div className="transaction-amount">
        <TransactionAmount amount={transaction.amount} type={transaction.type} />
        <Text size="sm" variant="secondary">
          {transaction.account}
        </Text>
      </div>
    </li>
  )
}
