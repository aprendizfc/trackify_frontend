import { Stack } from '@trackify/ui-kit'

import { AccountsBalance } from '../accounts-balance/accounts-balance.component'
import { AccountsCard } from '../accounts-card/accounts-card.component'

export const HomePage: React.FC = () => {
  return (
    <Stack gap={6}>
      <AccountsBalance />

      <AccountsCard />
    </Stack>
  )
}
