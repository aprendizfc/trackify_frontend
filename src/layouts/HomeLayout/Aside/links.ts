import { CreditCard, Layers, Layout } from 'react-feather'

type Link = {
  to: string
  text: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  iconSize: number
}

export const links: Link[] = [
  { to: '/', text: 'Dashboard', icon: Layout, iconSize: 20 },
  { to: '/accounts', text: 'Accounts', icon: Layers, iconSize: 20 },
  { to: '/transactions', text: 'Transactions', icon: CreditCard, iconSize: 20 },
]
