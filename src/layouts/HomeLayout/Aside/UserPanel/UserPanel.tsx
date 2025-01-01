import { UserInfo } from '@/components/UserInfo/UserInfo'
import { LogoutButton } from '../LogoutButton/LogoutButton'

import * as styles from './UserPanel.module.css'

export function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <UserInfo />

      <LogoutButton />
    </div>
  )
}
