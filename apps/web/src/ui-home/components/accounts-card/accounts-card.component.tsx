import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@trackify/ui-kit'
import { Plus } from 'react-feather'

import { AccountList } from './account-list/account-list.component'

export const AccountsCard: React.FC = () => {
  return (
    <Card className="flex-1 px-4 pt-6 pb-5" hasShadow={true}>
      <CardHeader className="mb-4">
        <CardTitle>Accounts</CardTitle>

        <CardAction>
          <Button appearance="secondary" startAdornment={<Plus />} />
        </CardAction>
      </CardHeader>

      <CardContent>
        <AccountList />
      </CardContent>
    </Card>
  )
}
