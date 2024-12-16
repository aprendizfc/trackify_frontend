import styles from './Avatar.module.css'
import AvatarInitials from './AvatarInitials/AvatarInitials'
import type { AvatarProps } from './Avatar.types'
import AvatarImage from './AvatarImage/AvatarImage'

export default function Avatar({
  initials,
  img,
  altText,
  size = 'md',
  shape = 'round',
}: AvatarProps) {
  return (
    <div className={styles.avatarWrapper}>
      {initials && <AvatarInitials initials={initials} shape={shape} size={size} />}

      {img && altText && (
        <AvatarImage img={img} shape={shape} size={size} altText={altText} />
      )}
    </div>
  )
}
