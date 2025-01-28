import { Link as RouterLink, type To } from 'react-router'
import cx from '@/js/utils/classNames/classNames'
import { ButtonContent } from '../button-content/button-content'
import type { ButtonProps } from '../Button/Button.types'

type ButtonConfig = Pick<
  ButtonProps,
  | 'variant'
  | 'size'
  | 'icon'
  | 'iconPosition'
  | 'srText'
  | 'srTextPosition'
  | 'shouldFitContainer'
>

interface LinkProps extends React.ComponentProps<'a'> {
  children: React.ReactNode
  to?: To
  className?: string
  appearance?: 'link' | 'button'
}

export function Link({
  href,
  to,
  className,
  children,
  appearance = 'link',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  srText,
  srTextPosition = 'right',
  shouldFitContainer,
  ...rest
}: LinkProps & ButtonConfig) {
  const classes = cx(className, {
    link: appearance === 'link',
    [`btn btn-${size} btn-${variant}`]: appearance === 'button',
    'btn-fit-container': appearance === 'button' && shouldFitContainer,
  })

  if (to) {
    return (
      <RouterLink to={to} className={classes} {...rest}>
        <ButtonContent
          icon={icon}
          iconPosition={iconPosition}
          srText={srText}
          srTextPosition={srTextPosition}
        >
          {children}
        </ButtonContent>
      </RouterLink>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        srText={srText}
        srTextPosition={srTextPosition}
      >
        {children}
      </ButtonContent>
    </a>
  )
}
