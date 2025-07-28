import type { LinkProps } from '@tanstack/react-router'

import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Container } from '@trackify/ui-kit'
import { CreditCard, Home, Layers } from 'react-feather'

type LinkWithIconProps = LinkProps & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

const links: LinkWithIconProps[] = [
  {
    icon: Home,
    text: 'Home',
    to: '/',
  },
  {
    icon: Layers,
    text: 'Accounts',
    to: '/accounts',
  },
  {
    icon: CreditCard,
    text: 'Transactions',
    to: '/transactions',
  },
]

const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-54 flex-col bg-gray-50">
        <nav className="w-full">
          <ul className="flex flex-col gap-1">
            {links.map(({ icon: Icon, text, to, ...rest }) => (
              <li className="mx-4" key={to}>
                <Link
                  to={to}
                  {...rest}
                  className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-100 [&.active]:bg-gray-100 [&.active]:font-semibold [&.active>svg]:text-indigo-600"
                >
                  <Icon height={20} width={20} />
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-4">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/(app)/_app')({
  component: AppLayout,
})
