import { Text } from '@/components/shared/Text/Text'
import { Tag } from 'react-feather'
import type { Transaction } from '../types'
import * as styles from './transaction-list-item.module.css'

interface TransactionDateCategoryProps {
  date: Transaction['date']
  category: Transaction['category']
}

export function TransactionDateCategory({
  date,
  category,
}: TransactionDateCategoryProps) {
  return (
    <Text size="sm" color="secondary" className={styles.transactionDateWrapper}>
      <span>{date}</span>

      <span>•</span>

      <span className={styles.transactionCategory}>
        <Tag role="presentation" focusable={false} width={12} height={12} />
        {category}
      </span>
    </Text>
  )
}
