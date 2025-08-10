type BaseProps = {
  align?: 'center' | 'justify' | 'left' | 'right'
  color?: 'default' | 'error' | 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  weight?: 'bold' | 'light' | 'medium' | 'normal' | 'semibold'
}

type PolymorphicComponentProps<T extends React.ElementType> = BaseProps &
  React.ComponentPropsWithoutRef<T> & {
    as?: T
  }

export type TextProps<T extends React.ElementType> = PolymorphicComponentProps<T>
