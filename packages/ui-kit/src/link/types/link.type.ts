import type { LinkComponentProps } from '@tanstack/react-router'

import type { ButtonProps } from '../../button/types/button.type'

export interface LinkProps extends LinkComponentProps {
  asButton?: boolean
  rootProps?: ButtonProps
}
