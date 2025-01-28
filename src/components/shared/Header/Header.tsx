import * as React from 'react'
import { useStuck } from './hooks/useStuck'
import { Heading } from '../heading/heading'

interface HeaderProps extends React.ComponentProps<'header'> {
  headingText: string
  actions?: React.ReactElement
}

export default function Header({ headingText, actions, ...rest }: HeaderProps) {
  const headerRef = React.useRef<HTMLHeadElement>(null)

  const { isStuck } = useStuck(headerRef)

  return (
    <header {...rest} data-stuck={isStuck} ref={headerRef} className="header">
      <Heading appearance="h2">{headingText}</Heading>

      {actions && <div className="actions">{actions}</div>}
    </header>
  )
}
