import { UserInfo } from '@/components/UserInfo/UserInfo'
import { LogoutButton } from '../LogoutButton/LogoutButton'

export function UserPanel() {
  return (
    <div className="user-panel">
      <UserInfo />

      <LogoutButton />
    </div>
  )
}
