type Position = 'left' | 'right'

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'unstyled' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'full'
  icon?: React.ReactElement
  iconPosition?: Position
  srText?: string
  srTextPosition?: Position
}

export interface IconProps {
  icon: ButtonProps['icon']
}
