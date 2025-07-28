import type { CardProps } from './card.type'

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <div className="rounded-md shadow-(--shadow)" {...rest}>
      {children}
    </div>
  )
}
