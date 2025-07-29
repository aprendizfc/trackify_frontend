import type { LinkProps as RouterLinkProps } from '@tanstack/react-router'

import type { ButtonProps } from '../button/button.type'

export interface LinkProps extends RouterLinkProps {
  rootProps?: ButtonProps
}
