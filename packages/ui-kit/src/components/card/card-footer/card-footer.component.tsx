import type { CardFooterProps } from '../card.type'

import { Stack } from '../../stack/stack.component'

export const CardFooter: React.FC<CardFooterProps> = ({ children, ...rest }) => {
  return <Stack {...rest}>{children}</Stack>
}
