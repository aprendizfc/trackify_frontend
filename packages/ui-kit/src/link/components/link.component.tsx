import { Link as RouterLink } from '@tanstack/react-router'

import type { LinkProps } from '../types/link.type'

import { Button } from '../../button/components/button.component'

export const Link: React.FC<LinkProps> = ({ asButton, children, rootProps, ...rest }) => {
  if (asButton) {
    return (
      <Button asChild={true} {...rootProps}>
        <RouterLink {...rest}>{children}</RouterLink>
      </Button>
    )
  }

  return <RouterLink {...rest}>{children}</RouterLink>
}
