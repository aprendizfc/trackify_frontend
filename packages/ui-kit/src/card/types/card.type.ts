import type { StackProps } from '../../stack/types/stack.type'

export interface CardProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
  hasShadow?: boolean
}

export interface CardHeaderProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface CardTitleProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface CardDescriptionProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface CardActionProps extends React.ComponentProps<'div'> {
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
