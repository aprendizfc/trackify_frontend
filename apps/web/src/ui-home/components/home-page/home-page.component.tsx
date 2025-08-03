import { Stack } from '@trackify/ui-kit'

import { AccountsOverviewSection } from '../accounts-overview-section/accounts-overview-section.component'

export const HomePage: React.FC = () => {
  return (
    <Stack direction="column">
      <AccountsOverviewSection />
    </Stack>
  )
}
