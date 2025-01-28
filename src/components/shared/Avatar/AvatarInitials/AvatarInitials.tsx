import useColor from './useColor'
import type { AvatarInitialsProps } from '../Avatar.types'
import cx from '../../../../js/utils/classNames/classNames'

export default function AvatarInitials({
  initials,
  shape = 'round',
  size = 'md',
}: AvatarInitialsProps) {
  const { bgColor, textColor } = useColor(initials)

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className={cx('grid place-content-center uppercase p-1', {
        'size-6 text-xs': size === 'xs',
        'size-8 text-sm': size === 'sm',
        'size-10 text-base': size === 'md',
        'size-20 text-3xl': size === 'lg',
        'size-36 text-6xl': size === 'xl',
        'rounded-full': shape === 'round',
        'rounded-sm': shape === 'rounded',
        'rounded-none': shape === 'square',
      })}
    >
      {initials}
    </div>
  )
}
