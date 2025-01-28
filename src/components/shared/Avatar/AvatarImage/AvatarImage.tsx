import cx from '../../../../js/utils/classNames/classNames'
import type { AvatarImageProps } from '../Avatar.types'

export default function AvatarImage({
  img,
  altText,
  size = 'md',
  shape = 'round',
}: AvatarImageProps) {
  return (
    <div
      className={cx('inline-flex', {
        'size-6': size === 'xs',
        'size-8': size === 'sm',
        'size-10': size === 'md',
        'size-20': size === 'lg',
        'size-36': size === 'xl',
        'rounded-full': shape === 'round',
        'rounded-sm': shape === 'rounded',
        'rounded-none': shape === 'square',
      })}
    >
      <img src={img} alt={altText} className="w-full rounded-full" />
    </div>
  )
}
