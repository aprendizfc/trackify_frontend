import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@trackify/ui-kit'

export const AccountsBalance: React.FC = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Balance</CardTitle>

        <CardDescription>Your current balance is $5,000</CardDescription>

        <CardAction>View Transactions</CardAction>
      </CardHeader>
    </Card>
  )
}
