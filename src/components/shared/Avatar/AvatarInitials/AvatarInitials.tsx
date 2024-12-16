import useColor from './useColor'
import type { AvatarInitialsProps } from '../Avatar.types'
import cx from '../../../../js/utils/classNames'
import avatarStyles from '../Avatar.module.css'
import styles from './AvatarInitials.module.css'

export default function AvatarInitials({
  initials,
  shape = 'round',
  size = 'md',
}: AvatarInitialsProps) {
  const { bgColor, textColor } = useColor(initials)
  const avatarSize = `size-${size}`

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className={cx(styles.container, avatarStyles[avatarSize], avatarStyles[shape])}
    >
      {initials}
    </div>
  )
}
