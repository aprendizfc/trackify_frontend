type AvatarShape = 'round' | 'rounded' | 'square'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  initials?: string
  img?: string
  altText?: string
  size?: AvatarSize
  shape?: AvatarShape
}

export interface AvatarInitialsProps {
  initials: string
  size?: AvatarSize
  shape?: AvatarShape
}

export interface AvatarImageProps {
  img: string
  altText: string
  size?: AvatarSize
  shape?: AvatarShape
}
