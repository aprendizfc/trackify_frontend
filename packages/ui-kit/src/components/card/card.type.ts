import type { StackProps } from '../stack/stack.type'

export interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface CardHeaderProps
  extends React.ComponentProps<'div'>,
    Omit<StackProps, 'gap' | 'wrap'> {
  children: React.ReactNode
}

export interface CardContentProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface CardFooterProps
  extends React.ComponentProps<'div'>,
    Omit<StackProps, 'gap' | 'wrap'> {
  children: React.ReactNode
}
