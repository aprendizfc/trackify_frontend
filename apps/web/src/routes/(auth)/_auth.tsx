import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Stack } from '@trackify/ui-kit'

const AuthLayout: React.FC = () => {
  return (
    <Stack className="h-full" direction="column">
      <Stack className="border-b border-b-gray-200 py-5">Trackify Logo</Stack>

      <Stack alignItems="center" className="flex-1" justifyContent="center">
        <Outlet />
      </Stack>
    </Stack>
  )
}

export const Route = createFileRoute('/(auth)/_auth')({
  component: AuthLayout,
})
