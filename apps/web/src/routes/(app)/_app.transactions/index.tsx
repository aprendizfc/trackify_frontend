import { createFileRoute } from '@tanstack/react-router'

const TransactionsIndexPage: React.FC = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Transactions</h1>
      <p className="text-lg text-gray-600">Manage your financial transactions here</p>
    </div>
  )
}

export const Route = createFileRoute('/(app)/_app/transactions/')({
  component: TransactionsIndexPage,
})
