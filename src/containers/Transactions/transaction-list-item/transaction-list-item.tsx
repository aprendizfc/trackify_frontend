import { Text } from '@/components/shared/Text/Text'
import { TransactionTypeIcon } from './transaction-type-icon'
import { TransactionAmount } from './transaction-amount'
import type { Transaction } from '../types'
import * as styles from './transaction-list-item.module.css'
import { TransactionDateCategory } from './transaction-date-category'

interface TransactionListItemProps extends React.ComponentProps<'li'> {
  transaction: Transaction
}

export function TransactionListItem({ transaction }: TransactionListItemProps) {
  return (
    <li className={styles.transaction}>
      <div className={styles.transactionInfoWrapper}>
        <TransactionTypeIcon type={transaction.type} />

        <div>
          <Text weight="semibold">{transaction.description}</Text>

          <TransactionDateCategory
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      </div>

      <div className={styles.transactionAmountWrapper}>
        <TransactionAmount amount={transaction.amount} type={transaction.type} />
        <Text size="sm" color="secondary">
          {transaction.account}
        </Text>
      </div>
    </li>
  )
}
