import cx from '@/js/utils/classNames/classNames'
import { Icon } from '../Button/Icon'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'
import { ButtonProps } from '../Button/Button.types'

type ButtonContentProps = Pick<
  ButtonProps,
  'icon' | 'iconPosition' | 'srText' | 'srTextPosition' | 'children'
>

export function ButtonContent({
  children,
  icon,
  iconPosition,
  srText,
  srTextPosition,
}: ButtonContentProps) {
  const hasIconAndContent: boolean = !!children && !!icon

  return (
    <span className={cx(`btn-inner-wrapper`, { 'has-gap': hasIconAndContent })}>
      {icon && iconPosition === 'left' && <Icon icon={icon} />}

      <span className="btn-content">
        {srText && srTextPosition === 'left' && <VisuallyHidden>{srText}</VisuallyHidden>}

        {children}

        {srText && srTextPosition === 'right' && (
          <VisuallyHidden>{srText}</VisuallyHidden>
        )}
      </span>

      {icon && iconPosition === 'right' && <Icon icon={icon} />}
    </span>
  )
}
