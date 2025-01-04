import { TransactionList } from './transaction-list/transaction-list'
import { transactions } from './fake-transactions'

export default function Transactions() {
  return (
    <TransactionList onEdit={() => {}} onDelete={() => {}} transactions={transactions} />
  )
}
