import { Stack } from '@trackify/ui-kit'

import { AccountsOverviewSection } from '../accounts-overview-section/accounts-overview-section.component'
import { TransactionsOverview } from '../transactions-overview/transactions-overview.component'

export const HomePage: React.FC = () => {
  return (
    <Stack direction="column" gap={10}>
      <AccountsOverviewSection />

      <TransactionsOverview />
    </Stack>
  )
}
