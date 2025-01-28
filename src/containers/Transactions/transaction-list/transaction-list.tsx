import { compareAsc, format, isToday, isYesterday, parse } from 'date-fns'
import { TransactionListItem } from '../transaction-list-item/transaction-list-item'
import { groupBy } from './group-by'
import type { Transaction } from '../types'

interface TransactionListProps {
  transactions: Transaction[]
  onEdit: (transaction: Transaction) => void
  onDelete: (transaction: Transaction) => void
}

export function TransactionList({ transactions }: TransactionListProps) {
  const sortedTransactions: Transaction[] = [...transactions].sort((a, b) =>
    compareAsc(new Date(b.date), new Date(a.date))
  )

  const groupedTransactions = groupBy(sortedTransactions, 'date')

  return (
    <ul role="list">
      {Object.entries(groupedTransactions).map(([date, records]) => {
        const d: Date = parse(date, 'yyyy-MM-dd', new Date())
        let distance: string = ''

        if (isToday(d)) {
          distance = 'Today'
        } else if (isYesterday(d)) {
          distance = 'Yesterday'
        } else {
          distance = format(new Date(d), 'MMMM d, yyyy')
        }

        return (
          <div key={date}>
            <div className="transaction-item-header">
              <span>{distance}</span>
            </div>
            {records?.map((record) => (
              <TransactionListItem key={record.id} transaction={record} />
            ))}
          </div>
        )
      })}
    </ul>
  )
}
