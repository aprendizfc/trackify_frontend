import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@trackify/ui-home'

export const Route = createFileRoute('/(app)/_app/')({
  component: HomePage,
})
