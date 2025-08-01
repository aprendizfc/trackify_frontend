import { Link } from '@trackify/ui-kit'

export const AccountListItem: React.FC = () => {
  return (
    <Link
      className="flex justify-between p-2 text-sm hover:rounded-lg hover:bg-slate-50"
      to="/accounts"
    >
      <span>Account Name</span>
      <span>Account Balance</span>
    </Link>
  )
}
