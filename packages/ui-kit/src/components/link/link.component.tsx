import { Link as RouterLink } from '@tanstack/react-router'

import type { LinkProps } from './link.type'

import { Button } from '../button/button.component'

export const Link: React.FC<LinkProps> = ({ rootProps, ...rest }) => {
  return (
    <Button asChild={true} {...rootProps}>
      <RouterLink {...rest}>Home</RouterLink>
    </Button>
  )
}
