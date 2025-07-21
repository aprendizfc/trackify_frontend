import { createFileRoute } from '@tanstack/react-router'

const AccountsIndexPage: React.FC = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Accounts</h1>
      <p className="text-lg text-gray-600">Manage your accounts here</p>
    </div>
  )
}

export const Route = createFileRoute('/(app)/_app/accounts/')({
  component: AccountsIndexPage,
})
