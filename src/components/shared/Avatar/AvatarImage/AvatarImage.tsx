import cx from '../../../../js/utils/classNames/classNames'
import type { AvatarImageProps } from '../Avatar.types'
import avatarStyles from '../Avatar.module.css'
import styles from './AvatarImage.module.css'

export default function AvatarImage({
  img,
  altText,
  size = 'md',
  shape = 'round',
}: AvatarImageProps) {
  const avatarSize = `size-${size}`
  return (
    <div className={cx(styles.container, avatarStyles[avatarSize], avatarStyles[shape])}>
      <img src={img} alt={altText} />
    </div>
  )
}
