import Avatar from '../shared/Avatar/Avatar'
import { Text } from '../shared/Text/Text'

export function UserInfo() {
  return (
    <div className="user-info">
      <Avatar initials="JD" />
      <div>
        <Text size="sm">John Doe</Text>
        <Text size="xs">john.doe@gmail.com</Text>
      </div>
    </div>
  )
}
