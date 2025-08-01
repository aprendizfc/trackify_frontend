import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '@/ui-home/components/home-page/home-page.component'

export const Route = createFileRoute('/(app)/_app/')({
  component: HomePage,
})
