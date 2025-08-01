import type { LinkComponentProps } from '@tanstack/react-router'

import type { ButtonProps } from '../button/button.type'

export interface LinkProps extends LinkComponentProps {
  asButton?: boolean
  rootProps?: ButtonProps
}
