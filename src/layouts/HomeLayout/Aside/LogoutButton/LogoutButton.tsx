import Button from '@/components/shared/Button/Button'
import { LogOut } from 'react-feather'

export function LogoutButton() {
  return (
    <Button
      srText="Logout"
      icon={<LogOut role="presentation" focusable="false" />}
      variant="icon"
      size="md"
    />
  )
}
