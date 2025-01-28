import { TransactionList } from './transaction-list/transaction-list'
import { transactions } from './fake-transactions'
import Header from '@/components/shared/Header/Header'
import { DollarSign } from 'react-feather'
import { Outlet } from 'react-router'
import { Link } from '@/components/shared/link/link'

export default function Transactions() {
  return (
    <>
      <Header
        headingText="Transactions"
        actions={
          <Link
            to="create"
            href="asd"
            appearance="button"
            icon={<DollarSign role="presentation" focusable="false" />}
          >
            Add transaction
          </Link>
        }
      />

      <Outlet />

      <TransactionList
        onEdit={() => {}}
        onDelete={() => {}}
        transactions={transactions}
      />
    </>
  )
}
