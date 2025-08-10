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

// type BaseProps = {
//   align?: 'center' | 'justify' | 'left' | 'right'
//   color?: 'default' | 'error' | 'primary' | 'secondary' | 'success' | 'warning'
//   size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
//   weight?: 'bold' | 'light' | 'medium' | 'normal' | 'semibold'
// }

// // Polymorphic props: T is the "as" component (e.g. 'p', 'span', etc.)
// type PolymorphicComponentProps<T extends React.ElementType> = BaseProps &
//   Omit<React.ComponentPropsWithoutRef<T>, 'as' | keyof BaseProps> & {
//     as?: T
//   }

// // Props for the component
// export type TextProps<T extends React.ElementType> = PolymorphicComponentProps<T>
