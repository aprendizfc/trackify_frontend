import type { CardContentProps } from './card.type'

export const CardContent: React.FC<CardContentProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}
