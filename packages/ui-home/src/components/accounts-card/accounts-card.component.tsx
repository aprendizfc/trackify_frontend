import { Button, Card, CardAction, CardHeader, CardTitle } from '@trackify/ui-kit'
import { Plus } from 'react-feather'

export const AccountsCard: React.FC = () => {
  return (
    <Card className="flex-1 px-4 pt-6 pb-5">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>

        <CardAction>
          <Button adornment={<Plus />} appearance="secondary2" />
        </CardAction>
      </CardHeader>
    </Card>
  )
}
