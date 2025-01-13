type Position = 'left' | 'right'

export interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'disabled'> {
  variant?: 'primary' | 'unstyled' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'full'
  icon?: React.ReactElement
  iconPosition?: Position
  srText?: string
  srTextPosition?: Position
  isDisabled?: boolean
}

export interface IconProps {
  icon: ButtonProps['icon']
}
