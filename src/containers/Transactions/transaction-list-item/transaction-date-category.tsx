import { Text } from '@/components/shared/Text/Text'
import { Tag } from 'react-feather'
import type { Transaction } from '../types'

interface TransactionDateCategoryProps {
  date: Transaction['date']
  category: Transaction['category']
}

export function TransactionDateCategory({
  date,
  category,
}: TransactionDateCategoryProps) {
  return (
    <Text size="sm" variant="secondary" className="inline-flex items-center gap-2">
      <span>{date}</span>

      <span>•</span>

      <span className="inline-flex items-center gap-1">
        <Tag role="presentation" focusable={false} width={12} height={12} />
        {category}
      </span>
    </Text>
  )
}
