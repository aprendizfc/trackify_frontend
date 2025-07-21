import { createFileRoute, Outlet } from '@tanstack/react-router'

const AuthLayout: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute('/(auth)/_auth')({
  component: AuthLayout,
})
