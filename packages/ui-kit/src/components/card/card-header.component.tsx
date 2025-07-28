import type { CardHeaderProps } from './card.type'

import { Stack } from '../stack/stack.component'

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }) => {
  return <Stack {...rest}>{children}</Stack>
}
