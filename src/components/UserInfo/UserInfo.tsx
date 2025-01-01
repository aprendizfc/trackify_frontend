import Avatar from '../shared/Avatar/Avatar'
import { Text } from '../shared/Text/Text'

import * as styles from './UserInfo.module.css'

export function UserInfo() {
  return (
    <div className={styles.userInfoWrapper}>
      <Avatar initials="JD" />
      <div>
        <Text size="sm">John Doe</Text>
        <Text size="xs">john.doe@gmail.com</Text>
      </div>
    </div>
  )
}
